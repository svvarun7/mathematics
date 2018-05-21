var express = require("express");
var app     = express();
var path    = require("path");

app.get('/', function(req,res){
	res.sendFile(path.join(__dirname+'/index.html'));
});
app.get('/Server.js', function(req,res){
	res.sendFile(path.join(__dirname+'/Server.js'));
});
app.get('/Source.js', function(req,res){
	res.sendFile(path.join(__dirname+'/source.js'));
});




app.listen(3005);

console.log("Running at port 3005");