const express = require('express')
const multer = require('multer')
const upload = multer({ dest: 'uploads/',filename: 'uploads/' })

const app = express()


const ImageModel = require("../Model/image.models")
var bodyParser = require("body-parser");
var fs = require('fs');
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const Img = "./4.PNG"
recordRoutes.route("/upload/add").post(async function (req, response, next) {
    

    
    let db_connect = dbo.getDb();
    var email = req.body.emails;
    var images = req.body.avatar;
    // const path = fs.readdirSync(images)
    var image={
            data: images,
            contentType: 'image/png'
        }
        const Storage = multer.diskStorage({
            destination: "uploads",
            filename: function (req, file, cb) { 
                       cb(null , Img);   
                    }
        });
        console.log(Storage)
    let today = new Date();
    var dateOfRegistartion = today;

    // var Storage = multer.diskStorage({   
    //     destination: function(req, file, cb) { 
    //        cb(null, './uploads');    
    //     }, 
    //     filename: function (req, file, cb) { 
    //        cb(null , file.originalname);   
    //     }
    //  });

     var upload = multer({
         storage: Storage,
         limits : {fileSize : 1000000}
        }).single("demo_image");
        console.log(upload)
    var data = {
        "email": email,
        "image": image,
        "dateOfRegistartion": dateOfRegistartion
    }
    const created = db_connect.collection("upload").insertOne(data, function (err, res) {
        if (err) throw err;
        response.json(res);
    });
    if (created) {
        console.log("Something Wrong")
    }
    else {
        console.log("Success")
        // console.log(image)
    }
});
module.exports = recordRoutes;


app.post('/profile', upload.single('avatar'), function (req, res, next) {
    console.log(req.file);
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
})

app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
    // req.files is array of `photos` files
    // req.body will contain the text fields, if there were any
})

const cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
app.post('/cool-profile', cpUpload, function (req, res, next) {
    // req.files is an object (String -> Array) where fieldname is the key, and the value is array of files
    //
    // e.g.
    //  req.files['avatar'][0] -> File
    //  req.files['gallery'] -> Array
    //
    // req.body will contain the text fields, if there were any
})