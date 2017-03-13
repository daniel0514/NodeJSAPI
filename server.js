var express = require('express');
var app = express();
var fs = require('fs');
var mongo = require('mongodb');

app.get('/projects', function(req, res){
   fs.readFile(__dirname + "/projects.json", "utf8", function(err, data){
       console.log(data);
       res.end(data);
   });
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
                            console.log(items);
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