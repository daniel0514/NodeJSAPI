const express = require('express');
const bodyParser = require('body-parser');
const  app = express();
const  mongo = require('mongodb');
const  mongoClient = mongo.MongoClient;
const  mongoID = mongo.ObjectID;
var mongoDB;

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Handles the GET request on all projects
app.get('/projects', function(req, res){
    mongoDB.collection('Projects', function(err, collection){
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
});

//Handles the GET request on specific project by Project Name
app.get('/projects/:projectName', function(req, res){
    mongoDB.collection('Projects', function(err, collection){
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
});

//Handles POST request to add a new project to the database
app.post('/newProject', function (req, res){
    var item = {
        "name": req.body.name,
        "page": req.body.page,
        "technology": req.body.technology,
        "descriptions": req.body.descriptions,
        "images": req.body.images
    }
    mongoDB.collection('Projects').insertOne(item, function(err, result){
        if(!err){
            console.log('Item Inserted');
        } else {
            console.log('Fail to Insert the item');
        }
    })
    res.set('Content-Type', 'text/plain');
    res.send('POST Request received and inserted into the database');
});

//Use POST to update project information instead of using PUT
app.post('/updateProject', function (req, res){
    console.log("Upading Project: " + req.body.id);
    console.log("Body: " + JSON.stringify(req.body));
    var item = {
        "name": req.body.name,
        "page": req.body.page,
        "technology": req.body.technology,
        "descriptions": req.body.descriptions,
        "images": req.body.images
    }
    var id = req.body.id;
    mongoDB.collection('Projects').updateOne({"_id": mongoID(id)}, {$set: item}, function(err, result){
        if(!err){
            res.status(200)
                .send("Update Request received and item is successfully updated");
        } else {
            res.status(500)
                .send(err);
            console.log("Error: " + error);
        }
    })
});

//Handles Restful DELETE
app.delete('/deleteProject', function (req, res){
    console.log(req.body);
    var id = req.body.id;
    mongoDB.collection('Projects').deleteOne({"_id": mongoID(id)}, function(err, result){
        if(!err){
            res.status(200)
                .send("Delete Request received and item is successfully deleted");
        } else {
            res.status(500)
                .send(err);
            console.log("Error: " + error);
        }
    })
});

//Use Connection Pooling to avoid expensive connection per request
mongoClient.connect("mongodb://localhost:27017/Portfolio", function(err, db){
    if(!err){
        console.log("Connected to DB");
        mongoDB = db;
    } else {
        console.log("Unable to Connect to Database");
        process.exit();
    }
});
app.listen(8000);
console.log('API is now running on port 8000');