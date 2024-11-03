const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('site'));

// Handle any requests that don't match the ones above
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'site', 'index.html'));
});

var cors_proxy = require('./cors-anywhere');
cors_proxy
	.createServer({
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
	.listen(8080, function () {
		console.log('Running CORS Anywhere on ' + ':' + 8080);
	});

app.listen(3000, () => {
	console.log('Server is running on port 3000');
});
