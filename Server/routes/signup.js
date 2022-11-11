var express=require("express");
var bodyParser=require("body-parser");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

// This section will help you create a new record.
recordRoutes.route("/signup/add").post(function (req, response) {
    let db_connect = dbo.getDb();
    if(req.body.password===req.body.cpassword){   
    var name = req.body.name;
    var email =req.body.email;
    var pass = req.body.password;
    var phone =req.body.phone;
  
    var data = {
        "name": name,
        "email":email,
        "password":pass,
        "phone":phone
    }
    
    db_connect.collection("Users").insertOne(data, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
    return response.redirect('signup_success.html');
   }
   else{
     console.log("Password is not match")
   }
   });
module.exports = recordRoutes;