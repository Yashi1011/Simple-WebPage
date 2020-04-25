var express = require('express');
var mysql = require('mysql');
var bodyParser  = require("body-parser");
var app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'names'
});

app.get('/',function(req,res){
	var q = 'SELECT name as name from list_names order by created_at desc limit 1';
	connection.query(q, function(error, results){
		if (error) throw error;
		var name = results[0].name;
		res.render("home", {name_db: name});
	});
});

app.post('/register', function(req,res){
 	var person = {name: req.body.name};
	connection.query('INSERT INTO list_names SET ?', person, function(err, result) {
		console.log(err);
 		console.log(result);
 		res.redirect("/");
	});
});

app.listen(3000, function(){
	console.log("App listening to 3000 port");
});