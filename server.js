// require('dotenv').config()
const express = require("express");
const app = express();
const PORT = 3001;
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

// const knexConfig = require('./knexfile');
// const knex = require('knex')(knexConfig[ENV]);
// const morgan = require('morgan');
// const knexLogger = require('knex-logger');

// Seperated Routes for each Resource
// const usersRoutes = require('./routes');

app.use(express.static('public'));


// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
// app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
// app.use(knexLogger(knex));

// function randomImgGenerator(category) {
//   knex('images').where("specialization", "=", category).orderBy(random()).limit(6);
// };


//TESTING ONLY - Shows req.path

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

///////////////
app.get("/", (req, res) => {
  console.log("Homepage");
  res.send("Homepage");
  // knex.select('*')
  //     .from('images')
  //     .groupBy('specialization')
  //     .asCallback((err, data) => {
  //       if (err) throw err;
  //       console.log(data);
  //       res.json(data);
  //     });
});

app.post("/login", (req, res) => {
  res.send("Login");
});

app.post("/register", (req, res) => {
  res.send("Register");
});


// SEARCH
app.get("/search", (req, res) => {
  console.log("Search Page")
  res.send("Search Page");
});


app.post("/search", (req, res) => {
  console.log(req.body.searchWord)
  res.send("Search Page");
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

//DASHBOARD
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