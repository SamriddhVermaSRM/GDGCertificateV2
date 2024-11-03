var cors_proxy = require('./cors-anywhere');
cors_proxy
	.createServer({
		originBlacklist: originBlacklist,
		originWhitelist: originWhitelist,
		//  requireHeader: ['origin', 'x-requested-with'],
		removeHeaders: [
			'cookie',
			'cookie2',
			// Strip Heroku-specific headers
			'x-request-start',
			'x-request-id',
			'via',
			'connect-time',
			'total-route-time',
			// Other Heroku added debug headers
			// 'x-forwarded-for',
			// 'x-forwarded-proto',
			// 'x-forwarded-port',
		],
		redirectSameOrigin: true,
		httpProxyOptions: {
			// Do not add X-Forwarded-For, etc. headers, because Heroku already adds it.
			xfwd: false,
		},
	})
	.listen(port, host, function () {
		console.log('Running CORS Anywhere on ' + host + ':' + port);
	});
