// Require dependencies
var http = require("http");
var fs = require("fs");

//TO DO: Set our port to 8080

//TO DO: create server

function handleRequest(req, res) {
  // Capture the url the request is made to
  var path = req.url;

  // When we visit different urls, read and respond with different files
  switch (path) {

  case "/food":
    return fs.readFile(__dirname + "/food.html", function(err, data) {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });

    /*TO DO: 
      add path for movies.html
      add path for frameworks.html
      default to rendering index.html, if none of above cases are hit
    */

  }
}

// Starts our server.

