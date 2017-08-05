var path = require("path");
var connection = require(path.join(__dirname, "connection.js"));

var orm = {
	selectAll: function(callback){
		connection.query("SELECT * FROM burgers", function(err, res){
			if (err) throw err;
			var burgsToEat = res.filter(function(burgers){
				return !burgers.devoured;
			})

			var eatenBurgs = res.filter(function(burgers){
				return burgers.devoured;
			})
			var testObj = {
				burgersToEat: burgsToEat,
				eatenBurgers: eatenBurgs
			}
			callback(testObj);
		})
	},

	insertOne: function(val){
		connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)", [val, false], function(err, res){
			if (err) throw err;
		})
	},

	updateOne: function(burgerID, val){
		connection.query("UPDATE burgers SET ? WHERE ?", [
			{devoured: val},
			{id: burgerID}
			], function(err, res){
			if (err) throw err;
		})
	}
}


orm.updateOne("DoubleBurger", true);
module.exports = orm;