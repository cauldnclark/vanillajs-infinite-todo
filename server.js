// create a static node server
var express = require("express");
var app = express();
var path = require("path");
var port = process.env.PORT || 8070;

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + "/public"));

// send our index.html file to the user for the home page
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);
console.log("http://localhost:8070");
