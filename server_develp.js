process.env.NODE_ENV=process.env.NODE_ENV|| "development"; //"production";//

const express = require('express');
const PORT = 4000;
const app = express();


//const mongodb = require('mongodb');

//const config = require('./db');

//const client = mongodb.MongoClient;

var mongoose =require( "./config/mongoose");

var db=mongoose();
var updatelog =require("./app/codes/updatelog.code");

/*client.connect(config.DB, function(err, db) {
    if(err) {
        console.log('database is not connected')
    }
    else {
        console.log('connected!!')
    }
});
*/

app.get('/', function(req, res) {
    res.json({"hello API IoT": "world"});
});
app.get('/mc_record', function(req, res) {
    updatelog.update(req.query);
});
app.listen(PORT, function(){
    console.log('Your node js server is running on PORT:',PORT);
});
