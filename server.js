/*
 * Server side JS controlling page redirect and request queries
 *
 */

var http 	= require("http");	//initiallize the server to require node.js http functions
var fs 		= require("fs");
var html	= "";

/*
 * This function is called each time the server
 * running encounters a request package from a client.
 * The server will then identify which file was requested
 * and thus provide the requested sources.
 * Params: req as a var that holds the desired path, resp as the return value for the client
 */
function requestHandler(req, resp) {
	console.log("Server received a request: ", req.method);
	console.log("Path: ", req.url);

	fs.readFile("./public/index.html", function(err, html) {
		if (err) {
			throw err;
		}
		//send a request responce.
		resp.writeHeader(200, {"Content-Type": "text/html"});
		resp.write(html);
		resp.end();
	});


}


function listenHandler() {

}

// Node.js server setup.
var server = http.createServer(requestHandler);
server.listen(3006, listenHandler);	//open port 3000, if this port is used, try 3001, 3002, ect..
console.log("Server is running on port: ", 3006); //3000 can be variable
