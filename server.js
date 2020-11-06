/*
 * Server side JS controlling page redirect and request queries
 *
 */

var http 	= require("http");	//initiallize the server to require node.js http functions
var fs 		= require("fs");
var html	= "";
var file    = "./public";
var page    = "";

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

    if(req.url == "/" || req.url == "/index.html")
        page = file.concat("/index.html");

    else if(req.url == "/owners.html" || req.url == "/breeder.html" || req.url == "/walkers.html" || req.url == "/dog_meet.html" || req.url == "/dogs.html")
        page = file.concat(req.url);

	fs.readFile(page, function(err, html) {
		if (err) {
			throw err;
		}
		//send a request response.
		resp.writeHeader(200, {"Content-Type": "text/html"});
		resp.write(html);
		resp.end();
	});


}


function listenHandler() {

}

// Node.js server setup.
var server = http.createServer(requestHandler);
server.listen(3007, listenHandler);	//open port 3007
console.log("Server is running on port: ", 3007); //3007 is variable port
