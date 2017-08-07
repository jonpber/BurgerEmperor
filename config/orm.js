var path = require("path");
var connection = require(path.join(__dirname, "connection.js"));

var orm = {
	selectAll: function(cb){
		connection.query("select *, MOD(burgers.id, 4) as idMod from burgers", function(err, res){
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
			callback();
			})
	}
}

module.exports = orm;