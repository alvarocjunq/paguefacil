var cartaoDao = require('../persistence/cartaoDao');
var dao = new cartaoDao();

module.exports = function (app){

    app.get('/api/cartoes/:cpf', function(request, response) {
        let cpf = request.params.cpf;
        dao.cartoes(cpf, function(resp) {
            response.json(resp);
        });
    });

    app.get('/api/validate/:password', function(request, response) {
        let password = request.params.password;
        dao.isValidPassword(password, function(resp) {
            response.json(resp);
        });
    });

    app.post('/api/cadastrar', function(request, response) {
        let body = request.body;
        dao.cadastrar(body.cpf, body.password , function(resp){
            response.json(resp);
        });
    });

}