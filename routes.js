var express        = require("express"),
    url            = require('url'),

exports.setRoutes = function(app, application_root){

app.get('/', function(req, res) {
  res.send('Hello World!');
});

}

