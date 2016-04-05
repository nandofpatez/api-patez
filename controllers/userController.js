var db = require('../db-config.js');

exports.list = function(callback){
	db.User.find({}, function(error, users){
		if(error){
			callback({error: 'Não foi possivel retornar os usuarios.'});
		}else{
			callback(users);
		}
	});
}

exports.user = function(id, callback){
	db.User.findById(id, function(error, user){
		if(error){
			callback({error: 'Não foi possivel retornar o usuario.'});
		}else{
			callback(user);
		}
	});
}

exports.save = function(nome_completo, email, password, callback){
	new db.User({
		'nome_completo': nome_completo,
		'email': email,
		'password': password,
		'created_at': new Date()
	}).save(function(error, user){
		if(error){
			callback({error: 'Não foi possivel salvar usuario.'});
		}else{
			callback(user);
		}
	});
}

exports.update = function(id, nome_completo, email, password, callback){
	db.User.findById(id, function(error, user){
		if(nome_completo){
			user.nome_completo = nome_completo;
		}

		if(email){
			user.email = email;
		}

		if(password){
			user.password = password;
		}

		user.save(function(error, user){
			if(error){
				callback({error: 'Não foi possivel atualizar o cadastro'});
			}else{
				callback(user);
			}
		});
	});
}

exports.delete = function(id, callback){
	db.User.findById(id, function(error, user){
		if(error){
			callback({error: 'Não foi possivel retornar o usuario.'});
		}else{
			user.remove(function(error){
				if(!error){
					callback({response: 'Usuario excluido com sucesso.'});
				}
			});
		}
	});
}