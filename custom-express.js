var express = require('express');
var http = require('http');

var bodyParser = require('body-parser');
var cors = require('cors')();

module.exports = function(){
    var app = express();

    app.use(cors);
    app.options('*', cors);
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    require('./routes/cartao')(app);

    return app;
}