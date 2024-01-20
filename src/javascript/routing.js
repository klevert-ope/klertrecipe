const path = window.location.pathname;

if (path === '/') {
	import('public/home.html').then((module) => {
		document.querySelector('main').innerHTML = module.default;
	});
} else {
	import('public/404.html').then((module) => {
		document.querySelector('main').innerHTML = module.default;
	});
}
