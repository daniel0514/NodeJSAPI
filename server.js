var express = require('express');
var app = express();
var mongo = require('mongodb');
var mongoClient = mongo.MongoClient;

app.use(express.static(__dirname + "/public"));
app.get('/projects', function(req, res){
    mongoClient.connect("mongodb://localhost:27017/Portfolio", function(err, db){
        if(!err){
            console.log("Request Received and Connected to DB");
            db.collection('Projects', function(err, collection){
                if(!err){
                    console.log("Project Collection found");
                    collection.find().toArray(function(err, items) {
                        if(err){
                            res.status(500)
                                .send(err);
                            console.log("Error: " + error);
                        } else {
                            res.header("Access-Control-Allow-Origin", "*")
                                .json(items);
                        }
                    })
                } else {
                    res.status(500)
                        .send(err);
                    console.log("Error: " + error);
                }
            });
        }
    });
});
app.get('/projects/:projectName', function(req, res){
    mongoClient.connect("mongodb://localhost:27017/Portfolio", function(err, db){
        if(!err){
            console.log("Request Received and Connected to DB");
            db.collection('Projects', function(err, collection){
                if(!err){
                    console.log("Project Collection found");
                    collection.findOne({ name: req.param('projectName')}, function(err, document){
                        if(!err){
                            if(document != null){
                                res.header("Access-Control-Allow-Origin", "*")
                                    .json(document);
                            } else {
                                res.status(404)
                                    .send("No Project found");
                            }
                        } else {
                            res.status(500)
                                .send(err);
                            console.log("Error: " + error);
                        }
                    });
                } else {
                    res.status(500)
                        .send(err);
                    console.log("Error: " + error);
                }
            });
        }
    });
});


app.listen(8000);
console.log('API is now running on port 8000');