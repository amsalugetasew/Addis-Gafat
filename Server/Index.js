const express = require("express");
const session = require('express-session');
const app = express();
const cors = require("cors");


// const bodyParser = require("body-parser");
// const path = require('path');
// const fs = require("fs");
// const multer = require("multer");
// const mongoose = require("mongoose");
// var imageModel = require('./Model/imageModel');


require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
app.use(require("./routes/upload"));
app.use(require("./routes/signup"));
app.use(require("./routes/PostNews")) 
app.use(require("./routes/users"));
app.use(require("./routes/auth"));
app.use(express.static(__dirname));
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const dbo = require("./db/conn");
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);


// app.use(bodyParser.urlencoded(
//   { extended:true }
// ))


// // SET STORAGE
// var storage = multer.diskStorage({
// destination: function (req, file, cb) {
//   cb(null, 'uploads')
// },
// filename: function (req, file, cb) {
//   cb(null, file.fieldname + '-' + Date.now())
// }
// })

// var upload = multer({ storage: storage })

// app.get("/to_Upload",(req,res)=>{
// res.render("ToUpload");
// })

// app.post("/uploadphoto",upload.single('myImage'),(req,res)=>{
// var img = fs.readFileSync(req.file.path);
// var encode_img = img.toString('base64');
// var final_img = {
//     contentType:req.file.mimetype,
//     image:new Buffer(encode_img,'base64')
// };
// imageModel.create(final_img,function(err,result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(result.img.Buffer);
//         console.log("Saved To database");
//         res.contentType(final_img.contentType);
//         res.send(final_img.image);
//     }
// })
// })




app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});