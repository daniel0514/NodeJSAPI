var express = require('express');
var app = express();
var mongo = require('mongodb');

app.use(express.static(__dirname + "/public"));

app.get('/projects', function(req, res){
    if(projects.length < 2){
        res.status(404);
    } else {
        res.header("Access-Control-Allow-Origin", "*");
        res.json(projects);
    }
});


var mongoClient = mongo.MongoClient;
var projects;
mongoClient.connect("mongodb://localhost:27017/Portfolio", function(err, db){
   if(!err){
       console.log("Connected to DB");
       db.collection('Projects', function(err, collection){
          if(!err){
              console.log("Project Collection found");
                collection.find().toArray(function(err, items) {
                    if(err){
                        console.log("Error: " + error);
                    } else {
                        if(items.length < 1) {
                            console.log("No Items in Collection");
                        } else {
                            console.log("One or more items found");
                            projects = items;
                        }
                    }
                })
          } else {
              console.log("Unable to find Projects Collection");
          }
       });
   }
});

app.listen(8000);
console.log('API is now running on port 8000');