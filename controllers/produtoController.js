var db = require('../db-config.js');

exports.list = function(callback){
	db.Produto.find({}, function(error, produtos){
		if(error){
			callback({error: 'Não foi possivel retornar os produtos.'});
		}else{
			callback(produtos);
		}
	});
}

exports.detalheProd = function(id, callback){
	db.Produto.findById(id, function(error, produto){
		if(error){
			callback({error: 'Não foi possivel retornar o produto.'});
		}else{
			callback(produto);
		}
	});
}

exports.save = function(nome_prod, preco_prod, callback){
	new db.Produto({
		'nome_prod': nome_prod,
		'preco_prod': preco_prod
	}).save(function(error, produto){
		if(error){
			callback({error: 'Não foi possivel salvar o produto.'});
		}else{
			callback(produto);
		}
	});
}

exports.update = function(id, nome_prod, preco_prod, callback){
	db.Produto.findById(id, function(error, produto){
		if(nome_prod){
			produto.nome_prod = nome_prod;
		}

		if(preco_prod){
			produto.preco_prod = preco_prod;
		}

		produto.save(function(error, produto){
			if(error){
				callback({error: 'Não foi possivel atualizar o produto.'});
			}else{
				callback(produto);
			}
		});
	});
}

exports.delete = function(id, callback){
	db.Produto.findById(id, function(error, produto){
		if(error){
			callback({error: 'Nãoo foi possivel retornar o produto.'});
		}else{
			produto.remove(function(error){
				if(!error){
					callback({response: 'Produto excluido com sucesso.'});
				}
			});
		}
	});
}