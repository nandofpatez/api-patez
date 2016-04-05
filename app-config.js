var express = require('express');

var app = module.exports = express();

var bodyParser = require('body-parser');

var allowCors = function(req, res, next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	res.header('Access-Control-Allow-Credentials', 'true');

	next();
}

var server = app.listen(process.env.PORT || 8080, function () {
	var port = server.address().port;
	console.log("App now running on port", port);
});

app.use(allowCors);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
	extended: true
}));
