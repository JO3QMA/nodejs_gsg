var server = require('./server_module.js');
var router = require('./router.js');

server.start(router.route);