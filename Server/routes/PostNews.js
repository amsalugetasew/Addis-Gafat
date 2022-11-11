var express=require("express");
var bodyParser=require("body-parser");
const recordRoutes = express.Router();
const dbo = require("../db/conn");

// This section will help you create a new record.
recordRoutes.route("/PostNews/add").post(function (req, response) {
    let db_connect = dbo.getDb();
    var title = req.body.title;
    var news =req.body.news;
    var image =req.body.image;
    var desc =req.body.desc;
    let today = new Date();
    var dateOfRegistartion = today;
  
    var data = {
        "title": title,
        "news":news,
        "image": image,
        "desc":desc,
        "dateOfRegistartion": dateOfRegistartion
    }
    
    db_connect.collection("News").insertOne(data, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
    // return response.redirect('signup_success.html');
  
   });
  //  collection.find().sort({datefield: 1}).toArray(function(err, docs) {...});

   recordRoutes.route("/PostNews").get(function (req, res) {
    let db_connect = dbo.getDb("AGTC");
    db_connect
      .collection("News")
      .find({}, {sort: {"dateOfRegistartion": -1}})
      // .sort({"dateOfRegistartion": 1})
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
      });
   });
module.exports = recordRoutes;