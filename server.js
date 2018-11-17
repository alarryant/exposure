// require('dotenv').config()
const express = require("express");
const app = express();
const PORT = 3001;

// Seperated Routes for each Resource
// const usersRoutes = require('./routes');

app.use(express.static('public'));


app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
//TEST
app.get("/test_json", (req, res) => {
  res.json({success: 'WOW -- Owen Wilson'});

});

///////////////
app.get("/", (req, res) => {
  console.log("Homepage")
  res.send("Homepage");
});

app.get("/search", (req, res) => {
  console.log("Search Page")
  res.send("Search Page");
});

app.post("/login", (req, res) => {
  res.send("Login");
});

app.post("/register", (req, res) => {
  res.send("Register");
});

//IMAGE
app.post("/images/:id", (req, res) => {
  res.send("Images/:id");
});


//ARTIST
app.get("/artists/:id", (req, res) => {
  console.log("Artist Profile Page")
  res.send("Artist Profile Page");
});

app.get("/artists/:id/dashboard", (req, res) => {
  console.log("Artist Dashboard")
  res.send("Artist Dashboard");
});

app.post("/artists/:id/edit", (req, res) => {
  res.send("Artist Edit Dashboard");
});

app.post("/artists/:id/review", (req, res) => {
  res.send("Artist Review");
});

app.post("/artists/:id/availability", (req, res) => {
  res.send("Artist Availability");
});


//OPPORTUNITIES

app.get("/opportunities", (req, res) => {
  console.log("Opportunity")
  res.send("Opportunity");
});

app.post("/opportunities/:id/add", (req, res) => {
  res.send("Add Opportunity");
});

app.post("/opportunities/:id/delete", (req, res) => {
  res.send("Cancel Opportunity");
});

app.post("/opportunities/:id/apply", (req, res) => {
  res.send("Apply for Opportunity");
});


app.get("/clients/:id/dashboard", (req, res) => {
  console.log("Client Dashboard")
  res.send("Client Dashboard");
});

app.post("/clients/:id/dashboard/edit", (req, res) => {
  res.send("Edit Dashboard");
});

app.post("/clients/:id/like", (req, res) => {
  res.send("Likes");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});