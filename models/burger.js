var path = require("path");

var orm = require(path.join(__dirname, "..", "config", "orm.js"));

var burger = {
	tempList: function(callback1){
		orm.selectAll(callback1)
	}
}

module.exports = burger;