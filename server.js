require('dotenv').config();
const env = process.env.ENV || 'development';
const express = require("express");
const app = express();
const PORT = 3001;
const bodyParser = require("body-parser");
const bcrypt = require('bcryptjs');
const cookieSession = require('cookie-session');
const knexConfig = require('./knexfile');
const knex = require('knex')(knexConfig[env]);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
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
  });
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
  knex('users').select('*').where('id', req.session.user_id).asCallback((err, data) => {
    if (err) throw err;
    res.json(data);
  });
});


app.get("/dashboard/events", (req, res) => {
  knex("events").where("creator_id", req.session.user_id).orderBy('created_at', 'desc').then((data) => {
    res.json(data);
  })
})

app.get("/dashboard/likes", (req, res) => {
  knex('artist_likes')
    .join("users", "users.id", "=", "artist_likes.artist_id")
    .where('client_id', req.session.user_id)
    .then((data) => {
      console.log(data);
      res.json(data);
    });
});

app.post("/artists/:id/edit", (req, res) => {
  res.send("Artist Edit");
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
      knex('availabilities')
        .where("artist_id", artistId)
        .then(moredata => res.json(moredata));
    });
});

app.post("/artists/:id/removeavailability", (req, res) => {
  let artistId = req.params.id;
  let selectedDay = req.body.selectedDay;
  knex('availabilities')
    .where({artist_id: artistId, date: selectedDay })
    .del()
    .then(data => {
      knex('availabilities')
        .where("artist_id", artistId)
        .then(moredata => res.json(moredata));
    });
});

app.get("/artists/:id/availability", (req, res) => {
  let artistId = req.params.id;
  knex('availabilities')
    .select('*')
    .where("artist_id", artistId)
    .then(function(disabledDays) {
      res.json(disabledDays);
    });
 });

app.post("/artists/:id/like", (req, res) => {
  let artistId = req.body.artistId;
  let currentUser = req.body.currentUser;
  knex('artist_likes')
    .insert({
      artist_id: artistId,
      client_id: currentUser
    })
    .then(data => {
      knex('artist_likes')
        .where("artist_id", artistId)
        .countDistinct('client_id')
        .then(function(likes) {
          res.json(likes);
        });
    });
 });

app.post("/artists/:id/unlike", (req, res) => {
  let artistId = req.body.artistId;
  let currentUser = req.body.currentUser;
  knex('artist_likes')
    .where({artist_id: artistId, client_id: currentUser})
    .del()
    .then(data => {
      knex('artist_likes')
        .where("artist_id", artistId)
        .countDistinct('client_id')
        .then(function(likes) {
          res.json(likes);
        });
    });
 });

app.post("/artists/:id/totallikes", (req, res) => {
  let artistId = req.body.artistId;
  let currentUser = req.body.currentUser;
  knex('artist_likes')
    .where({artist_id: artistId})
    .countDistinct('client_id')
    .then(data => {
      res.json(likes);
    });
 });

app.post("/artists/:id/edit", (req, res) => {
  let artistId = req.params.id;
  console.log("this is server side input", req.body);
  // knex('users')
  //   .where("id", artistId)
  //   .update({twitter_url: req.body.twitter,
  //     facebook_url: req.body.facebook,
  //     instagram_url: req.body.instagram})

 });

//OPPORTUNITIES

app.get("/api/opportunities", (req, res) => {
  knex('events')
    .select('*')
    .join('users', 'users.id', '=', 'events.creator_id')
    .then(function(events) {
      res.json(events);
    });
 });

app.post("/opportunities/:id/add", (req, res) => {
  let cookie = req.session.user_id;
  let title = req.body.title;
  let description = req.body.description;
  let date = req.body.date;
  let price = req.body.price;
  let location = req.body.location;

  knex("events").insert({
    name: title,
    description: description,
    event_date: date,
    price: price,
    location: location,
    creator_id: cookie
  })
  .then(data => {
      knex("events").orderBy('created_at', 'desc').then(moredata =>
        res.json(moredata));
    });
});

app.post("/opportunities/:id/delete", (req, res) => {
  res.send("Cancel Opportunity");
});

app.post("/opportunities/:id/apply", (req, res) => {
  res.send("Apply for Opportunity");
});

app.post("/dashboard/:id/add", (req, res) => {
  let cookie = req.session.user_id;
  let title = req.body.title;
  let description = req.body.description;
  let date = req.body.date;
  let price = req.body.price;
  let location = req.body.location;

  knex("events").insert({
    name: title,
    description: description,
    event_date: date,
    price: price,
    location: location,
    creator_id: cookie
  })
  .then(data => {
      knex("events").where('creator_id', cookie).orderBy('created_at', 'desc').then(moredata =>
        res.json(moredata));
    });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});