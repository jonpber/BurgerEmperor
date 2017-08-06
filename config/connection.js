var mysql = require('mysql');
var path = require("path");

var keys = require(path.join(__dirname, "keys.js"));

var connection = mysql.createConnection(keys);

connection.connect(function(err) {
	if (err) {
		console.error("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});


module.exports = connection;