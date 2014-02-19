var express = require("express");
var url = require('url');
var logfmt = require("logfmt");
var app = express();
var mongo = require('mongoDBThings');
var routes = require('routes');

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});


routes.setRoutes(app, __dirname);




