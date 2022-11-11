// // Register Route
// const router = require("express").Router();
// // const { User, validate } = require("../Model/User");
// var express=require("express");
// const recordRoutes = express.Router();
// const dbo = require("../db/conn");
// // recordRoutes.route("/users/add").post(function (req, res) {
// router.post("/users/add", async (req, res) => {
//   let db_connect = dbo.getDb();
//   try {
//     // const { error } = validate(req.body);
//     // var firstName = req.body.firstName;
//     //     var lastName =req.body.lastName;
//     //     var email =req.body.email;
//     //     var password =req.body.password;
//     //     let today = new Date();
//     //     var dateOfRegistartion = today;
//     //     const salt = await  bcrypt.genSalt(Number(process.env.SALT));
//     //     const hashPassword = await  bcrypt.hash(password, salt);
//     //     var data = {
//     //               "firstName": firstName,
//     //               "lastName":lastName,
//     //               "email": email,
//     //               "password":hashPassword,
//     //               "dateOfRegistartion": dateOfRegistartion
//     //           }
//     if (error)
//       return res.status(400).send({ message: error.details[0].message });
//       // const user = db_connect.findOne({ email: email })
//       const user = db_connect.collection("Users").findOne({email: email});
//     if (user)
//       return res.status(409).send({ message: "User with given email already exist!" });

//     // const salt =  bcrypt.genSalt(Number(process.env.SALT));
//     // const hashPassword =  bcrypt.hash(password, salt);
//     db_connect.collection("Users").insertOne(data, function (err, res) {
//             if (err) throw err;
//             response.json(res);
//             res.status(201).send({ message: "User created successfully" })
//           });  
//     //  new User({ data, password: hashPassword }).save();
//     // res.status(201).send({ message: "User created successfully" })

//   } catch (error) {
//     res.status(500).send({ message: "Internal Server Error" })
//   }
// });
// // module.exports = recordRoutes;
// module.exports = router;


var express=require("express");
var bodyParser=require("body-parser");
const recordRoutes = express.Router();
const dbo = require("../db/conn");

recordRoutes.route("/users/add").post(async function (req, response) {
    try{
  let db_connect = dbo.getDb();
    var firstName = req.body.firstName;
    var lastName =req.body.lastName;
    var email =req.body.email;
    var password =req.body.password;
    var status ="Pending";
    let today = new Date();
    var dateOfRegistartion = today;
    const Cryptr = require("cryptr");
    const cryptr = new Cryptr("yoursecretkey");
    var encpassword = cryptr.encrypt(password);
    var data = {
        "firstName": firstName,
        "lastName":lastName,
        "email": email,
        "password":encpassword,
        "status": status,
        "dateOfRegistartion": dateOfRegistartion
    }
  const result = await db_connect.collection("Users").findOne({ email: email });
      if (result) {
        
        console.log(`Email already exist '${email}'`); 
        return response.status(401).send({ message: `Email already exist '${email}'` });  
  } else {
    const created = db_connect.collection("Users").insertOne(data, function (err, res) {
      if (err) throw err;
      response.json(res);
      return response.status(401).send({ message: `successfully registered` });
    });
} 
}catch (error) {
  response.status(500).send({ message: "Internal Server Error" });
}


   });
module.exports = recordRoutes;