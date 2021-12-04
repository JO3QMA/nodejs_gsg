var server = require('./server_module.js');
var router = require('./router.js');
var requestHandlers = require('./req_handler.js');

var handle = {};
handle['/']       = requestHandlers.start;
handle['/start']  = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;

server.start(router.route, handle);
