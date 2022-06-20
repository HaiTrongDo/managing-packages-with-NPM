let express = require('express');
let app = express();
var bGround = require('fcc-express-bground');
require('dotenv').config();


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
    if (process.env.MESSAGE_STYLE === "uppercase"){
        res.json({"message":"HELLO JSON"})
    } else {
        res.json({"message":"hello json"})
    }
});




























module.exports = app;