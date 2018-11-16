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

app.get("/test_json", (req, res) => {
  res.json({success: 'WOW -- Owen Wilson'});

});

app.get("/testing", (req, res) => {
  res.send("Hello this is working");
});




app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});