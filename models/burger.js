var path = require("path");

var orm = require(path.join(__dirname, "..", "config", "orm.js"));

var burger = {
	getList: function(callback1){
		orm.selectAll(callback1)
	},

	addBurger: function(name){
		orm.insertOne(name);
	},

	eatBurger: function(id){
		orm.updateOne(id, true);
	}
}

module.exports = burger;