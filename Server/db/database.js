// var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://gechsew:Gecho%401078@cluster0.y5pxl.mongodb.net/test',
 {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
var conn = mongoose.connection;
conn.on('connected', function() {
    console.log('database is connected successfully');
});
conn.on('disconnected',function(){
    console.log('database is disconnected successfully');
})
conn.on('error', console.error.bind(console, 'connection error:'));
module.exports = conn;



const mongoose = require('mongoose')

const DB = process.env.ATLAS_URI
mongoose.connect(DB, {
    useNewUrlParser: true,
     useUnifiedTopology: true,
}).then(() =>{
    console.log('Database connected..')
});