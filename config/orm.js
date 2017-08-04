var path = require("path");
var connection = require(path.join(__dirname, "connection.js"));

var orm = {
	selectAll: function(callback){
		connection.query("SELECT * FROM burgers", function(err, res){
			if (err) throw err;
			callback(res);
		})
	},

	insertOne: function(val){
		connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)", [val, false], function(err, res){
			if (err) throw err;
		})
	},

	updateOne: function(burger, val){
		connection.query("UPDATE burgers SET ? WHERE ?", [
			{devoured: val},
			{burger_name: burger}
			], function(err, res){
			if (err) throw err;
		})
	}
}

module.exports = orm;