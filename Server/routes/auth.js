// Login Route 
const router = require("express").Router();
var express=require("express");
// const { User } = require("../model/User");
const Joi = require("joi");
const bcrypt = require("bcrypt")
const recordRoutes = express.Router();
const dbo = require("../db/conn");
recordRoutes.route("/auth").post(async function (req, res) {
  try {
    let db_connect = dbo.getDb();
    var email =req.body.email;
    var passwords =req.body.password;
    const Cryptr = require("cryptr");
    const cryptr = new Cryptr("yoursecretkey");
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });
      const user = await db_connect.collection("Users").findOne({ email: email });
      var decpassword= cryptr.decrypt(user.password)
    if (user)
    {
      var status = user.status;
    if (passwords!==decpassword)
      return res.status(401).send({ message: "Invalid Email or Password" });
      else{
        if(status!=='Activate')
        {
          // console.log(`user decrtpted password: '${decpassword}'`);
          return res.status(401).send({ message: "Status should be Active" });
        }
        else{
          // const sessions = localStorage.getItem('email')
        // const userSession = { email: user.email }
        // req.session.user = userSession 
        // console.log(`user decrtpted password: '${decpassword}'`);
        // console.log(`user decrtpted password: '${sessions}'`);
        res.status(200).send({ data: user, message: "Logged in successfully" })
      }
    }

    // const token = await user.generateAuthToken();
    // res.status(200).send({ data: token, message: "Logged in successfully" })
    }
    else
      return res.status(401).send({ message: "Invalid Email or Password" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

const validate = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password")
  });
  return schema.validate(data);
}

module.exports = recordRoutes;
// module.exports = router;