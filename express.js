
//// inicializando os modulos

var express = require('express');
var expressHandlebars = require('express-handlebars');
var bodyparser = require('body-parser');

/// modulos externos
var  routers = require('./routes/router');

/// criando aplicação
var server = express();

// body-parser

server.use(bodyparser.urlencoded({ extended: false }));
server.use(bodyparser.json());

server.engine('handlebars', expressHandlebars.engine({ defaultLayout: 'main' }));
server.set('view engine', 'handlebars');

server.use(express.static(__dirname + '/public'));


/// criando rotas
server.use('/', routers);


server.listen(8080);