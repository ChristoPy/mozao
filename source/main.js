import App from "./components/app.js";

new Vue ({

	render: H => H (App)
}).$mount ("#App");


if ("serviceWorker" in navigator) {

	navigator.serviceWorker.register ("service-worker.js")
						   .then (Registration => console.log (`ServiceWorker Registratered. ${Registration.scope}`))
						   .catch (SomeError => console.log (`ServiceWorker Registration Failed: ${SomeError}`));
}