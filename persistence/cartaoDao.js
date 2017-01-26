function cartaoDao(){}

cartaoDao.prototype.isValidPassword = function(senha, callback){
	console.log("Verificando se o cartão está válido", senha);
	callback ({"valid": true});
}

cartaoDao.prototype.cadastrar = function(cpf, senha, callback){
	console.log("Cadastrando cartão", cpf, senha);
	callback({"message": "Cadastrado com sucesso", "code": 123});
}

cartaoDao.prototype.cartoes = function(cpf, callback){
	console.log("Obtendo cartões", cpf);
	callback ({"cartoes": [{
						"numero" : "12345678975",
						"banco": "Itaú",
						"bandeira":"visa",
						"cvc": "123",
						"titular": "PEDRO A CABRAL",
						"senha": "03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4"
					  },
					  {
						"numero" : "87654321121",
						"banco": "Santander",
						"bandeira":"master",
						"cvc": "321",
						"titular": "CRISTOVAO COLOMBO",
						"senha": "03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4"
					  }]
				});
}

module.exports = cartaoDao;