var db_string = 'postgres://iwsdrrbqsmgbkc:JlhSM4K2jLvs78CDae-3PXD-6o@ec2-54-235-93-178.compute-1.amazonaws.com:5432/d9lfgvvmfb7pqh';

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
