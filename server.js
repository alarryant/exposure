require('dotenv').config();
const env = process.env.ENV || 'development';

const express = require("express");
const app = express();
const PORT = 3001;
const bodyParser = require("body-parser")
const bcrypt = require('bcryptjs');
const cookieSession = require('cookie-session')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const knexConfig = require('./knexfile');
const knex = require('knex')(knexConfig[env]);

app.use(express.static('public'));

app.use(cookieSession({
  name: 'session',
  keys: ['cookiemonster']
}))


function randomImgGenerator(category) {
  // knex('images').where("specialization", "=", category).orderBy(random()).limit(6);
};

// --------------- ROUTES --------------- //

//TESTING ONLY - Shows req.path

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get("/homephotos", (req, res) => {
  knex('images').select('id', 'title', 'description', 'src', 'category', 'image_owner')
      .asCallback((err, data) => {
        if (err) throw err;
        res.json(data);
      });
});

app.get("/featured", (req, res) => {
  knex('images').select('*').where("featured", "like", "true").asCallback((err, data) => {
    if (err) throw err;
    res.json(data);
  });
});

app.get("/packages", (req, res) => {
  knex('price_packages').select('*').where("user_id", "=", 1).asCallback((err, data) => {
    if (err) throw err;
    res.json(data);
  });
});


// LOGIN
app.post("/login", (req, res) => {
  let userEmail = req.body.email;
  let userPassword = req.body.password;

  if (req.session.user_id) {
    res.json(req.session.user_id);
  } else {
    knex("users").select("*").where("email", "=", userEmail).where("password", "=", userPassword).then((data) => {
      req.session.user_id = data[0].id
      res.json(data);
    })
  }
  });


// LOGOUT
app.post("/logout", (req, res) => {
  req.session.user_id = null;
  res.json(req.session.user_id);
  });


// REGISTER
app.post("/register", (req, res) => {
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let email = req.body.email;
  let password = req.body.password;
  let userType = +req.body.userType;


knex('users').where('email', email).then((data) => {
  if(data.length !== 0) {
    res.status(400).send("Invalid email and/or password combination");
  } else {
    knex("users").insert({first_name: firstName,
                          last_name: lastName,
                          email: email,
                          password: bcrypt.hashSync(password, 10),
                          user_type_id: userType}).returning("id")
      .then((user_id) => {
        req.session.user_id = +user_id;
        res.json(req.session.user_id);
        });
      }
    });
});


// SEARCH
app.get("/search", (req, res) => {
  let queryWord = (req.query.searchWord).toLowerCase()
  knex('images')
    .where(
      knex.raw('LOWER("title") like ?',`%${queryWord}%`))
    .orWhere(
      knex.raw('LOWER("description") like ?',`%${queryWord}%`))
    .orWhere(
      knex.raw('LOWER("category") like ?', `%${queryWord}%`))
    .select('*')
    .then(function(images) {
      res.json(images)
    })
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

app.get("/artists/:id/portfolio", (req, res) => {
  console.log("Artist Profile Page")
  res.send("Artist Profile Page");
});

app.get("/api/artists/:id/dashboard", (req, res) => {
  console.log("Artist Dashboard")
  knex('users').select('*').first().where({id : 5}).asCallback((err, data) => {
    if (err) throw err;
    // console.log("Artist Dashboard", data);
    res.json(data);
  });
});

app.post("/artists/:id/edit", (req, res) => {
console.log(req.body)

  res.send("Artist Edit Profile");
});

app.post("/artists/:id/review", (req, res) => {
  res.send("Artist Review");
});

app.post("/artists/:id/availability", (req, res) => {
  console.log("this is server side", req.body.availability);
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