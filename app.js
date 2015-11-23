var http = require('http');
var account = require('./account.js');

var server = http.createServer(function(request, response){
	response.writeHead(200);
	response.write('Account balance: \n' + account.balance() + '\n');
	response.end();
});
server.listen(3000);