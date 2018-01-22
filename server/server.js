const express = require('express');

var app = express();

app.get('/', (req, res) => {
	res.send('Hello World!');
	// res.status(400).send({ error: 'Page not found.'});
});

app.get('/users', (req, res) => {
	res.send([{
		name: 'Mike',
		age : 27
	},{
		name: 'Omar',
		age:29
	}]);
});
app.listen(3000);

module.exports.app = app;