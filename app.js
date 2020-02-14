// importing modules
var express = require("express");

var mongoose = require("mongoose"); // to include mongoose ( to interact with MongoDB )
var bodyparser = require("body-parser"); // to include body parser ( to interact with front-end data )
var cors = require("cors"); // to include cors ( to create middle ware functionalities )
var path = require("path"); // to include path ( to set paths  for interaction)

var app = express();

const route = require("./routes/route");

//connect mongodb
mongoose.connect("mongodb://localhost:27017/contactlist");

//on connection
mongoose.connection.on("connected", () => {
  console.log("Connected to database mogodb @ 27017");
});

mongoose.connection.on("error", err => {
  if (err) {
    console.log("Error in Database Connection : " + err);
  }
});

//port no
const port = 3000;

//adding middleware - cors
app.use(cors()); // Cross Origin Resoursce Sharing

//body - parser
app.use(bodyparser.json());

// routes
app.use("/api", route);

//Testing server
app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => console.log("Server started at : " + port));
