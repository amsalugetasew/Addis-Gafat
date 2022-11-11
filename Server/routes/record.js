const express = require("express");
const PhoneBook = require('../Model/PhoneBook')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 
// This section will help you get a list of all the records.
recordRoutes.route("/record").get(function (req, res) {
 let db_connect = dbo.getDb("AGTC");
 db_connect
   .collection("Users")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 


recordRoutes.route("/add-phone").post( async function (req, res) {
  const phoneNumber = new PhoneBook(req.body)
  let db_connect = dbo.getDb();
  var myobj = {
    name: "getachew",
    phone: "0928531589"
  };
  db_connect.collection("gechs").insertOne(myobj, function (err, response){}); 
   try{
         res.status(201).json({
          status: 'Success',
          data : {
            myobj
          }
      })
  }catch(err){
      res.status(500).json({
          status: 'Failed',
          message : err
      })
  }
});


// app.get('/get-phone', async (req,res) => {
  recordRoutes.route("/get-phone").get(async function (req, res) {
  let db_connect = dbo.getDb();
  const phoneNumbers = db_connect
     .collection("gechs").find({})
     .toArray(function (err, result) {

      try{
        res.status(200).json({
            status : 'Success',
            result
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
    });
  
})

recordRoutes.route("/delete-phone/:id").delete((req, res) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("gechs").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    res.json(obj);
  });
 });

// recordRoutes.route("/delete-phone/:id").delete(async function (req, res) {
// // app.delete('/delete-phone/:id', async(req,res) => {
//   let db_connect = dbo.getDb();
//   await db_connect
//   .collection("Users")
//   db_connect
//   .collection("Users")
//   .deleteOne(req.params.id, function (err, obj) {
//     if (err) throw err;
//     console.log("1 document deleted");
//     res.json(obj);
//   });
//   // .findByIdAndDelete(req.params.id)
  
//   // try{
//   //   res.status(204).json({
//   //       status : 'Success',
//   //       data : {}
//   //   })
//   // }catch(err){
//   //     res.status(500).json({
//   //         status: 'Failed',
//   //         message : err
//   //     })
//   // }
// })



recordRoutes.route("/update-phone/:id").patch(async function (req, res) {
// app.patch('/update-phone/:id', async (req,res) => {
  let db_connect = dbo.getDb();
  let newvalues = {   
       $set: {         
        status: "Activate"
       }, 
      }
  const updatedPhone = await db_connect
  .collection("Users")
  .findByIdAndUpdate(req.params.id,newvalues,{
      new : true,
      runValidators : true
    })
  try{
      res.status(200).json({
          status : 'Success',
          data : {
            updatedPhone
          }
        })
  }catch(err){
      console.log(err)
  }
})





// This section will help you get a single record by id
recordRoutes.route("/record/:id").get(function (req, res) {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId( req.params.id )};
 db_connect
     .collection("Users")
     .findOne(myquery, function (err, result) {
       if (err) throw err;
       res.json(result);
     });
});
 
// This section will help you create a new record.
recordRoutes.route("/record/add").post(function (req, response) {
 let db_connect = dbo.getDb();
 if(req.body.password === req.body.confirmPassword){
 var myobj = {
   firstName: req.body.firstName,
   lastName: req.body.lastName,
   userName: req.body.userName,
   password: req.body.password,
   confirmPassword: req.body.confirmPassword,  
   level: req.body.level,
 };

 
 db_connect.collection("Users").insertOne(myobj, function (err, res) {
   if (err) throw err;
   response.json(res);
 });
}
else{
  console.log("Password is not match")
}
});
 




app.patch('/update/:id', async (req,res) => {
  let db_connect = dbo.getDb(); 
  const updatedPhone = await db_connect.collection("Users").findByIdAndUpdate(req.params.id,req.body,{
      new : true,
      runValidators : true
    })
  try{
      res.status(200).json({
          status : 'Success',
          data : {
            updatedPhone
          }
        })
  }catch(err){
      console.log(err)
  }
})

// This section will help you update a record by id.
recordRoutes.route("/update-user-profile/:id").post(async function (req, response) {
  let db_connect = dbo.getDb(); 
  var password = req.body.password;
  let myquery = { _id: ObjectId( req.params.id )}; 
  let newvalues = {   
    $set: {         
     password: password
    }, 
   }
   console.log(newvalues)
   await db_connect
   .collection("Users").updateOne(myquery, newvalues, function(err, res) {
     if (err) throw err;
     response.json(res);
     console.log("1 document updated");
   });
 });
 


// This section will help you update a record by id.
recordRoutes.route("/update-user/:id").post(async function (req, response) {
 let db_connect = dbo.getDb(); 
 let myquery = { _id: ObjectId( req.params.id )}; 
 let newvalues = {   
   $set: {         
    status: "Activate"
   }, 
  }
  console.log(newvalues)
  await db_connect
  .collection("Users").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    response.json(res);
    console.log("1 document updated");
  });
});



// This section will help you update a record by id.
recordRoutes.route("/update-user-d/:id").post(async function (req, response) {
  let db_connect = dbo.getDb(); 
  let myquery = { _id: ObjectId( req.params.id )}; 
  let newvalues = {   
    $set: {         
     status: "Deactivate"
    }, 
   }
   console.log(newvalues)
   await db_connect
   .collection("Users").updateOne(myquery, newvalues, function(err, res) {
     if (err) throw err;
     response.json(res);
     console.log("1 document updated");
   });
 });
 
// This section will help you delete a record
recordRoutes.route("/:id").delete((req, response) => {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId( req.params.id )};
 db_connect.collection("Users").deleteOne(myquery, function (err, obj) {
   if (err) throw err;
   console.log("1 document deleted");
   response.json(obj);
 });
});
 

// This section will help you delete a record
recordRoutes.route("/news/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("News").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
 });


module.exports = recordRoutes;