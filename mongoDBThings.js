var databaseUrl = "mongodb://heroku_app22303734:dibmjrd18uk2c643fbm6vai68h@ds027809.mongolab.com:27809/heroku_app22303734";
var collections = ["earthquakes"];
var db = require("mongojs").connect(databaseUrl, collections);

exports.mongo.Db.connect(exports.mongoUri, function (err, db) {
  db.collection('mydocs', function(er, collection) {
    collection.insert({'mykey': 'myvalue'}, {safe: true}, function(er,rs) {
    });
  });
});
