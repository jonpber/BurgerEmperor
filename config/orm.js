var path = require("path");
var connection = require(path.join(__dirname, "connection.js"));

var orm = {
	selectAll: function(cb){
		connection.query("SELECT * FROM burgers", function(err, res){
			if (err) throw err;
			cb(res);
		})
	},

	insertOne: function(val, cb){
		connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)", [val, false], function(err, res){
			if (err) throw err;
			cb();

		})
	},

	updateOne: function(burgerID, val, callback){
		connection.query("UPDATE burgers SET ? WHERE ?", [
			{devoured: val}, {id: burgerID} ], function(err, res){
			if (err) throw err;
			console.log("orm callback function is a " + callback);
			callback();
			})
	}
}

module.exports = orm;