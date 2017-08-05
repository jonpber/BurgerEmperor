var express = require("express");
var app = express();
var path = require("path");
var body = require("body-parser")
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
		burger.getList(function (array){
		res.render("index", {burger: array});
	})

	},

	addBurg: function(req, res){
		burger.addBurger(req.body.burger_name);
		res.redirect("/");
	},

	eatBurg: function(req,res){
		burger.eatBurger(req.params.id);
		res.redirect("/");
	}	
}



module.exports = router;