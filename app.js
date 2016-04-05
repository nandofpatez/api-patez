var app = require('./app-config.js');
var userController = require('./controllers/userController.js');
var produtoController = require('./controllers/produtoController.js');

var validator = require('validator');

app.get('/', function(req, res){
	res.end('Servidor On!');
});

// produtos
app.get('/produtos', function(req, res){
	produtoController.list(function(resp){
		res.json(resp);
	});
});

app.get('/produtos/:id', function(req, res){
	var id = validator.trim(validator.escape(req.param('id')));

	produtoController.detalheProd(id, function(resp){
		res.json(resp);
	});
});

app.post('/produtos', function(req, res){
	var nome_prod = req.param('nome_prod');
	var preco_prod = req.param('preco_prod');

	produtoController.save(nome_prod, preco_prod, function(resp){
		res.json(resp);
	});
});

app.put('/produtos', function(req, res){
	var id = req.param('id');
	var nome_prod = req.param('nome_prod');
	var preco_prod = req.param('preco_prod');

	produtoController.update(id, nome_prod, preco_prod, function(resp){
		res.json(resp);
	});
});

app.delete('/produtos/:id', function(req, res){
	var id = req.param('id');

	produtoController.delete(id, function(resp){
		res.json(resp);
	});
});

// users
app.get('/users', function(req, res){
	userController.list(function(resp){
		res.json(resp);
	});
});

app.get('/users/:id', function(req, res){
	var id = validator.trim(validator.escape(req.param('id')));

	userController.user(id, function(resp){
		res.json(resp);
	});
});

app.post('/users', function(req, res){
	var nome_completo = validator.trim(validator.escape(req.param('nome_completo')));
	var email = validator.trim(validator.escape(req.param('email')));
	var password = validator.trim(validator.escape(req.param('password')));

	userController.save(nome_completo, email, password, function(resp){
		res.json(resp);
	});
});

app.put('/users', function(req, res){
	var id = validator.trim(validator.escape(req.param('id')));
	var nome_completo = validator.trim(validator.escape(req.param('nome_completo')));
	var email = validator.trim(validator.escape(req.param('email')));
	var password = validator.trim(validator.escape(req.param('password')));

	userController.update(id, nome_completo, email, password, function(resp){
		res.json(resp);
	});
});

app.delete('/users/:id', function(req, res){
	var id = validator.trim(validator.escape(req.param('id')));

	userController.delete(id, function(resp){
		res.json(resp);
	});
});
