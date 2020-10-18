const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = 4300;

const app = express();

app.use(bodyParser.json());

app.use(cors());

//get request
app.get("/", (req, res) => {
  res.send("Hello From Server!");
});

//handle post request from angular
app.post("/enroll", (req, res) => {
  //log the data sent to console
  console.log(req.body);
  //throw an error
  res.status(200).send({ message: "Data received" });
});

app.listen(PORT, () => console.log("Server running on ", PORT));
