var express = require("express");
var body = require("body-parser");
var method = require("method-override");
var exphbs = require("express-handlebars");
var path = require("path");
var app = express();

var router = require(path.join(__dirname, "controllers", "burgers_controller.js"));

var port = process.env.PORT || 7000;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(method("_method"));

app.use(body.json()); // support json encoded bodies
app.use(body.urlencoded({ extended: true })); // support encoded bodies

app.use(express.static(path.join('public', "assets", "css")));
app.use(express.static(path.join('public', "assets", "img")));

app.get("/", router.getIndex);

app.post("/api/burgers", router.addBurg);

app.put("/api/burgers/:id", router.eatBurg);

app.listen(port, function(error){
	if (error){
		return console.log(error);
	}

	console.log("server is listening on http://localhost:%s", port);
})

