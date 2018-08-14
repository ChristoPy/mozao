const Path = require ("path");
const FileSystem = require ("fs");
const HTMLMinifier = require ("html-minifier").minify;
const JSMinifier = require ("terser");

const PRODUCTION_PATH = "distribution/";

const DIRECTORIES_TO_CREATE = [

	"components",
	"dependencies",
	"helpers",
	"images",
	"images/icons",
	"styles"
];

const SCRIPTS_TO_MINIFY = [

	"/service-worker.js",
	"/main.js",
	"components/app.js",
	"components/form.js",
	"components/slides.js",
	"components/style-component.js"
];

const FILES_TO_COPY = [

	"/manifest.json",
	"/dependencies/bootstrap.min.css",
	"/dependencies/tiny-slider.css",
	"/dependencies/vue.min.js",
	"/dependencies/jquery-3.3.1.slim.min.js",
	"/dependencies/bootstrap.bundle.min.js",
	"/dependencies/tiny-slider.js",
	"/helpers/CachePolyfill.js",
	"/styles/app-style.js",
	"/styles/form-style.js",
	"/styles/slides-style.js",
	"/images/icons/icon192.png",
	"/images/icons/icon168.png",
	"/images/icons/icon144.png",
	"/images/icons/icon96.png",
	"/images/icons/icon72.png",
	"/images/icons/icon48.png"
];


function GetImagesToCopy () {

	const ImagesFolder = __dirname + "/source/images/";

	const Files = FileSystem.readdirSync (ImagesFolder);
	Files.forEach (File => (!FileSystem.statSync (ImagesFolder + File).isDirectory () ? FILES_TO_COPY.push ("/images/" + File) : false));
}

function CopyFiles () {

	GetImagesToCopy ();

	console.log ("Copying Files...");

	for (let File of FILES_TO_COPY) {

		FileSystem.createReadStream (__dirname + "/source/" + File).pipe (FileSystem.createWriteStream (__dirname + "/" + PRODUCTION_PATH + File));
	}
}

function MinifyScripts () {

	console.log ("Minifying Scripts...");

	for (let Script of SCRIPTS_TO_MINIFY) {

		const FileContent = FileSystem.readFileSync (__dirname + "/source/" + Script, "utf-8");
		const Minified = JSMinifier.minify (FileContent).code;

		Minified.replace (/dependencies\/vue\.js/, "dependencies/vue.min.js");

		try {

			FileSystem.writeFileSync (__dirname + "/" + PRODUCTION_PATH + Script, Minified);
		}
		catch (SomeError) {

			throw (SomeError);
		}
	}
}

function MinifyHTML () {

	console.log ("Minifying index.html");

	const FileContent = FileSystem.readFileSync (__dirname + "/source/index.html", "utf-8");
	const Minified = HTMLMinifier (FileContent, {collapseWhitespace: true});

	try {

		FileSystem.writeFileSync (PRODUCTION_PATH + "index.html", Minified.replace (/dependencies\/vue\.js/, "dependencies/vue.min.js"));
	}
	catch (SomeError) {

		throw (SomeError);
	}
}

function BuildDirectories () {

	console.log ("Building Directories...");

	for (let Directory of DIRECTORIES_TO_CREATE) {

		if (!FileSystem.existsSync (PRODUCTION_PATH + Directory)) {

			FileSystem.mkdirSync (PRODUCTION_PATH + Directory);
		}
	}
}

BuildDirectories ();
CopyFiles ();
MinifyHTML ();
MinifyScripts ();