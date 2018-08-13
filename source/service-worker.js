importScripts ("helpers/CachePolyfill.js");


const APP_VERSION = "1.0.0";
const CACHE_NAME = `ChristoPy - Mozao : Version ${APP_VERSION}`;

const ROUTES = [

	"/",
	"index.html",
	"manifest.json",
	"dependencies/bootstrap.min.css",
	"dependencies/tiny-slider.css",
	"dependencies/vue.js",
	"dependencies/jquery-3.3.1.slim.min.js",
	"dependencies/bootstrap.bundle.min.js",
	"dependencies/tiny-slider.js",
	"main.js",
	"components/app.js",
	"components/form.js",
	"components/slides.js",
	"components/style-component.js",
	"helpers/CachePolyfill.js",
	"styles/app-style.js",
	"styles/form-style.js",
	"styles/slides-style.js",
	"images/icons/icon192.png",
	"images/icons/icon168.png",
	"images/icons/icon144.png",
	"images/icons/icon96.png",
	"images/icons/icon72.png",
	"images/icons/icon48.png"
];


self.addEventListener ("install", Event => Event.waitUntil (caches.open (CACHE_NAME).then (Cache => Cache.addAll (ROUTES))));
self.addEventListener ("fetch", Event => Event.respondWith (caches.match (Event.request).then (Response => Response || fetch (Event.request))));