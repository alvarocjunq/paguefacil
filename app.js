var app = require('express')(),
    http = require('http'),
    path = require('path'),
    fs = require('fs');
var appController = require('./controller/paguefacil-controller.js');

var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var logger = require('morgan');
var errorHandler = require('errorhandler');
var cors = require('cors');

//cors
app.use(cors());
app.options('*', cors());

// all environments
app.set('port', process.env.PORT || 3001);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride());

// development only
if ('development' == app.get('env')) {
    app.use(errorHandler());
}

app.get('/api/cartoes/:cpf', function(request, response) {
    var cpf = request.params.cpf;
	appController.cartoes(cpf, function(resp) {
		response.json(resp);
	});
});

app.get('/api/validate/:password', function(request, response) {
	var password = request.params.password;
    appController.isValidPassword(password, function(resp) {
		response.json(resp);
	});
});

app.post('/api/cadastrar', function(request, response) {
    var body = request.body;
    appController.cadastrar(body.cpf, body.password , function(resp){
        response.json(resp);
    });
});

http.createServer(app).listen(app.get('port'), '0.0.0.0', function() {
    console.log('Node server listening on port ', app.get('port'), app.get('env'));
});
