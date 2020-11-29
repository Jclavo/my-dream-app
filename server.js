// var express = require("express");
// var bodyParser = require("body-parser");

// var app = express();
// app.use(bodyParser.json());

// // Create link to Angular build directory
// var distDir = __dirname + "/dist/";
// app.use(express.static(distDir));

//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/my-dream-app'));

app.get('/assets', function(req,res) {
	res.sendFile(path.join(__dirname,'/dist/my-dream-app/assets'));
});

app.get('/*', function(req,res) {
	res.sendFile(path.join(__dirname,'/dist/my-dream-app/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 4200);