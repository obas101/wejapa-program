//require http module
const http = require("http");
//create server
http
  .createServer(function (req, res) {
    //send the http header, response 200 means ok
    res.writeHead(200, { "Content-Type": "text/plain" });
    //sending the response body
    res.write("Hello World! Welcome to WeJapa Internship program");
    res.end();
  })
  .listen(5000, () => {
    console.log("port running on 5000");
  });
