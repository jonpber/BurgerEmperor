var path = require("path");

var orm = require(path.join(__dirname, "..", "config", "orm.js"));

var burger = {
	getList: function(cb){
		orm.selectAll(cb)
	},

	addBurger: function(name, cb){
		orm.insertOne(name, cb);
	},

	eatBurger: function(id, bool, cb){
		orm.updateOne(id, true, cb);
	}
}

module.exports = burger;