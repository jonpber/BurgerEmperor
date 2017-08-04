var express = require("express");
var app = express();
var path = require("path");

var burger = require(path.join(__dirname, "..", "models", "burger.js"));

var tempArray = [
{
	burger_name: "AwesomeBurg"
},
{
	burger_name: "CrapBurg"
}]

var router = {
	getIndex: function(req, res){
		burger.tempList(function (array){
		res.render("index", {burger: array});
	})
	}
}



module.exports = router;