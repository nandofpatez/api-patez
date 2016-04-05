var db_string = 'mongodb://heroku-postgres-5d0ed5f6:84757887nfp@api-patez.herokuapp.com/';

var mongoose = require('mongoose').connect(db_string);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro ao conectar no banco.'));

db.once('open', function(){
	var userSchema = mongoose.Schema({
		nome_completo: String,
		email: String,
		password: String,
		created_at: Date
	});

	var produtosSchema = mongoose.Schema({
		nome_prod: String,
		preco: String
	});

	exports.User = mongoose.model('User', userSchema);
	exports.Produto = mongoose.model('Produto', produtosSchema);
});
