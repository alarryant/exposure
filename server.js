require('dotenv').config();
const env = process.env.ENV || 'development';

const express = require("express");
const app = express();
const PORT = 3001;
const bodyParser = require("body-parser");
const bcrypt = require('bcryptjs');
const cookieSession = require('cookie-session');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const knexConfig = require('./knexfile');
const knex = require('knex')(knexConfig[env]);

app.use(express.static('public'));

app.use(cookieSession({
  name: 'session',
  keys: ['cookiemonster']
}));

// --------------- ROUTES --------------- //

//TESTING ONLY - Shows req.path

app.use((req, res, next) => {
  next();
});

app.get("/homephotos", (req, res) => {
  knex('images').select('id', 'title', 'description', 'src', 'category', 'image_owner')
    .asCallback((err, data) => {
      if (err) throw err;
      res.json(data);
    });
});

// LOGIN
app.post("/login", (req, res) => {
  let userEmail = req.body.email;
  let userPassword = req.body.password;

  knex("users").select("*").where("email", "=", userEmail).where("password", "=", userPassword).then((data) => {
    req.session.user_id = data[0].id
    res.json(data);
  })
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
    if (data.length !== 0) {
      res.status(400).send("Invalid email and/or password combination");
    } else {
      knex("users").insert({
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: bcrypt.hashSync(password, 10),
        user_type_id: userType
      }).returning("id")
        .then((user_id) => {
          req.session.user_id = +user_id;
          res.json(req.session.user_id);
        });
    }
  });
});


// SEARCH
app.get("/search", (req, res) => {
  let queryWord = (req.query.searchWord).toLowerCase();
  knex('images')
    .where(
      knex.raw('LOWER("title") like ?', `%${queryWord}%`))
    .orWhere(
      knex.raw('LOWER("description") like ?', `%${queryWord}%`))
    .orWhere(
      knex.raw('LOWER("category") like ?', `%${queryWord}%`))
    .select('*')
    .then(function (images) {
      res.json(images)
    });
});

//IMAGE
app.post("/images/:id", (req, res) => {
  res.send("Images/:id");
});


//ARTIST
app.get("/artists/:id", (req, res) => {
  let artistId = req.params.id;
  let images =
    knex('images')
      .join("users", "image_owner", "=", "users.id")
      .where("image_owner", artistId)
      .then((images) => {
        knex('price_packages')
          .join("users", "price_packages.user_id", "=", "users.id")
          .where("price_packages.user_id", artistId).orderBy("tier")
          .then((packages) => {
            knex('reviews')
              .join("users", "reviews.user_id", "=", "users.id")
              .where("reviews.artist_id", artistId)
              .then((reviews) => {
                let artistData = {
                  images: images,
                  packages: packages,
                  reviews: reviews
                };
                res.json(artistData);
              });
          });
      });
});

app.get("/dashboard", (req, res) => {
  console.log("Dashboard Page")
  knex('users').select('*').where('id', req.session.user_id).asCallback((err, data) => {
    if (err) throw err;
    res.json(data);
  });
});

app.post("/artists/:id/edit", (req, res) => {
  res.send("Artist Edit Profile");
});

app.post("/artists/:id/review", (req, res) => {
  res.send("Artist Review");
});

app.post("/artists/:id/editavailability", (req, res) => {
  let artistId = req.params.id;

// this is ali's refactored version that doesn't work
  // const getAllAvails = () => {
  //   return knex('availabilities').where("artist_id", artistId);
  // }

  // knex('availabilities')
  //   .insert({
  //     artist_id: artistId,
  //     date: req.body.selectedDay
  //   })
  //   .then(getAllAvails)
  //   .then(res.json);

  knex('availabilities')
    .insert({
      artist_id: artistId,
      date: req.body.selectedDay
    })
    .then(data => {
      console.log('after insert', res);
      knex('availabilities')
        .where("artist_id", artistId)
        .then(moredata => res.json(moredata));
      console.log('after knex');
    });
});

//OPPORTUNITIES

app.get("/api/opportunities", (req, res) => {
  console.log("Opportunity");
  knex('events')
    .select('*')
    .join('users', 'users.id', '=', 'events.creator_id')
    .then(function(events) {
    console.log("Opps", events);
      res.json(events);
    });
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



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});