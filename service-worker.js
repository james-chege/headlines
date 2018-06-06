var cacheName = 'headline';

const offlineStuff =  [
	'./index.html',
	'./css/_all-skins.min.css',
	'./css/AdminLTE.min.css',
	'./css/normalize.css',
	'./scripts/main.js',
	'./scripts/headlines.js',
	'./scripts/main.js',
	'./scripts/search.js',
	'./scripts/viewSource.js'
];

self.addEventListener('install', (e) => {
	console.log('service worker is installed');
	e.waitUntil(
		caches.open(cacheName).then((cache) => {
			console.log("caching stuffs");
			return cache.addAll(offlineStuff);
		})
		);
});