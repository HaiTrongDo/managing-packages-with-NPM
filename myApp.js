let express = require('express');
let app = express();
var bGround = require('fcc-express-bground');
require('dotenv').config();

//Implement a Root-Level Request Logger Middleware
app.use((req, res, next) => {
    console.log(req.method + " "+ req.path + " - "+ req.ip)
    next()
})


//Chain Middleware to Create a Time Server
app.get("/now", (req, res, next) => {
req.time = new Date().toString();
    next();
}, (req, res)=>{
   res.json({time:req.time})
})

//Modify the myApp.js file to log "Hello World" to the console.
console.log("Hello World");

//Start a Working Express Server
// app.get("/",(req, res) => {
//     res.send("Hello Express");
// });


// Serve an HTML File
app.get("/", (req, res) => {
    res.sendFile(__dirname +'/views/index.html')
})

// Serve Static Assets
app.use("/public",express.static(__dirname + "/public"));


// Serve JSON on a Specific Route
// app.get("/json",(req, res) => {
//     res.json({"message": "Hello json"});
// });


//Use the .env File
app.get("/json",(req, res) => {
    let jsonResponse = {"message":"Hello json"};
    if (process.env.MESSAGE_STYLE === "uppercase"){
        jsonResponse.message = jsonResponse.message.toUpperCase()
    }
    res.json(jsonResponse)
});





























module.exports = app;