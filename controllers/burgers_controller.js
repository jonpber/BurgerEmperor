var express = require("express");
var app = express();
var path = require("path");
var body = require("body-parser")
var burger = require(path.join(__dirname, "..", "models", "burger.js"));


var router = express.Router();

router.get("/", function(req, res){
	burger.getList(function(data){
		res.render("index", {burger: data});
	});
})

router.post("/api/burgers", function(req, res){
	burger.addBurger(req.body.burger_name, function(){
		res.redirect("/");
	});
	
});

router.put("/api/burgers/:id?", function(req, res){
	burger.eatBurger(req.params.id, true, function(){
		res.redirect("/");
	});
});

module.exports = router;