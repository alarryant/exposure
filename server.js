require('dotenv').config();
const env = process.env.ENV || 'development';

var api_key = process.env.MAILGUN_API;
var DOMAIN = process.env.MAILGUN_DOMAIN;
var mailgun = require('mailgun-js')({ apiKey: api_key, domain: DOMAIN });

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const cookieSession = require('cookie-session');
const knexConfig = require('./knexfile');
const knex = require('knex')(knexConfig[env]);
const multer = require('multer');
const uuidv4 = require('uuid/v4');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(cookieSession({
  name: 'session',
  keys: ['cookiemonster']
}));

// --------------- ROUTES --------------- //

//TESTING ONLY - Shows req.path

app.use((req, res, next) => {
  next();
});


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.get('/homephotos', (req, res) => {
  knex('images')
    .select('id', 'title', 'description', 'src', 'category', 'image_owner')
    .asCallback((err, data) => {
      if (err) throw err;
      res.json(data);
    });
});

// LOGIN
app.post('/login', (req, res) => {
  knex('users')
    .select('*')
    .where({
      email: req.body.email,
      })
    .then((data) => {
      if( bcrypt.compareSync(req.body.password, data[0].password)) {
        req.session.user_id = data[0].id;
      } else {
        console.log("LOGIN - Invalid Password or Email");
      }
      res.json(data);
    });
});

// LOGOUT
app.post('/logout', (req, res) => {
  req.session.user_id = null;
  res.json(req.session.user_id);
});


// REGISTER
app.post('/register', (req, res) => {
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let email = req.body.email;
  let password = req.body.password;
  let userType = +req.body.userType;


  knex('users').where('email', email).then((data) => {
    if (data.length) {
        res.status(400)
           .send('Invalid email and/or password combination');
    } else {
      knex('users')
        .insert({
          first_name: firstName,
          last_name: lastName,
          email: email,
          password: bcrypt.hashSync(password, 10),
          user_type_id: userType
        })
        .returning('id')
          .then((user_id) => {
            req.session.user_id = +user_id;
            res.json({currentUser: req.session.user_id, userType: userType, firstName, lastName});
          });
    }
  });
});


// SEARCH
app.get('/search', (req, res) => {
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
      res.json(images);
    });
});

//IMAGE
app.post('/images/:id', (req, res) => {
  res.send('Images/:id');
});


//DASHBOARD
app.get('/dashboard', (req, res) => {
  let currentUser = req.query.currentUser;
  knex('users')
    .where('users.id', currentUser)
    .then((user) => {
      knex('artist_likes')
        .join('users', 'artist_likes.artist_id', '=', 'users.id')
        .where('client_id', currentUser)
        .then((likes) => {
          knex('events')
          .select('*')
          .join('users', 'users.id', '=', 'events.creator_id')
          .where('creator_id', currentUser)
          .then(function (events) {
            res.json({
            user: user,
            likes: likes,
            events: events
          });
        });
    });
  });
});


//ARTIST PROFILE
app.get('/artists/:id', (req, res) => {
  let artistId = req.params.id;
  let currentUser = req.query.currentUser;
    knex('images')
      // .join('users', 'image_owner', '=', 'users.id')
      .where('image_owner', artistId)
      .then((images) => {
        knex('users')
          .where("id", artistId)
          .then((user) => {
            knex('price_packages')
              .join('users', 'price_packages.user_id', '=', 'users.id')
              .where('price_packages.user_id', artistId).orderBy('tier')
              .then((packages) => {
                knex('reviews')
                  .join('users', 'reviews.user_id', '=', 'users.id')
                  .where('reviews.artist_id', artistId)
                  .then((reviews) => {
                    let artistData = {
                      user: user,
                      images: images,
                      packages: packages,
                      reviews: reviews
                    };
                    res.json(artistData);
                  });
              });
          });
      });
});

// app.post('/artists/:id/review', (req, res) => {
//   res.send('Artist Review');
// });

app.post("/artists/:id/editfeatured", (req, res) => {

  let photoSrc;
  let photoFeatured = req.body.clickedPhotoFeature;
  let currentUser = req.body.currentUser;

  if (req.body.clickedPhotoSrc) {
    photoSrc = req.body.clickedPhotoSrc.slice(21);
  }

  knex('images')
    .where('image_owner', currentUser)
    .where('featured', 'true')
    .then(numOfFeatures => {
      if (numOfFeatures.length < 10) {
        if (photoFeatured === 'true') {
          knex('images')
            .where('src', photoSrc)
            .update({'featured': 'false'})
            .then(data =>
              knex('images')
                .where('image_owner', currentUser)
                .orderBy('id')
                .then(moredata =>
                  res.json({images: moredata})))
        } else {
          knex('images')
            .where('src', photoSrc)
            .update({'featured': 'true'})
            .then(data =>
              knex('images')
                .where('image_owner', currentUser)
                .orderBy('id')
                .then(moredata =>
                  res.json({images: moredata})))
        }
      } else {
        res.status(400)
           .send("Sorry! The maximum number of feature photos is 10.");
      }
    });
});

app.post("/artists/:id/edit", (req, res) => {

  let artistId = req.body.artistId;
  let package1 = req.body.submitData.packages[0];
  let package2 = req.body.submitData.packages[1];
  let package3 = req.body.submitData.packages[2];
  let twitter = req.body.submitData.twitter;
  let facebook = req.body.submitData.facebook;
  let instagram = req.body.submitData.instagram;
  let bio = req.body.submitData.bio;

  knex('users')
    .where('users.id', artistId)
    .update({
      bio: bio,
      twitter_url: twitter,
      instagram_url: instagram,
      facebook_url: facebook
    })
    .returning('*')
    .then(() => {
      knex('price_packages')
        .where({user_id: artistId})
        .del()
        .then(() => {
          knex('price_packages')
            .insert([{
              user_id: artistId,
              tier: Number(package1.tier),
              price: Number(package1.price),
              description: package1.description},
              {user_id: artistId,
              tier: Number(package2.tier),
              price: Number(package2.price),
              description: package2.description},
              {user_id: artistId,
              tier: Number(package3.tier),
              price: Number(package3.price),
              description: package3.description
            }])
            .then((data) => {
              knex('price_packages')
                .join('users', 'price_packages.user_id', '=', 'users.id')
                .where('price_packages.user_id', artistId).orderBy('tier')
                .then((userData) => {
                  res.json(userData);
                });
            });
        });
    });

  });

// configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/images');
  },

  filename: (req, file, cb) => {
    const newFilename = `${uuidv4()}${path.extname(file.originalname)}`;
    cb(null, newFilename);
  },
});
// create the multer instance that will be used to upload/save the file
const upload = multer({ storage });

app.post('/upload', upload.single('selectedFile'), (req, res) => {

      let realPath = req.file.path.replace("public", '');
      knex('images')
        .insert({
          src: realPath,
          featured: "false",
          title: req.body.title,
          description: req.body.description,
          image_owner: req.body.image_owner,
          category: req.body.category
        })
        .then((data) => {
          knex('images')
            .where("image_owner", req.body.image_owner)
            .then((images) => {
              res.json({images: images});
            })
        })
    });

app.post('/artists/:id/editavailability', (req, res) => {
  let artistId = req.params.id;

  knex('availabilities')
    .insert({
      artist_id: artistId,
      date: req.body.selectedDay
    })
    .then(data => {
      knex('availabilities')
        .where('artist_id', artistId)
        .then(moredata => res.json(moredata));
    });
});

app.post('/artists/:id/removeavailability', (req, res) => {
  let artistId = req.params.id;
  let selectedDay = req.body.selectedDay;
  knex('availabilities')
    .where({ artist_id: artistId, date: selectedDay })
    .del()
    .then(data => {
      knex('availabilities')
        .where('artist_id', artistId)
        .then(moredata => res.json(moredata));
    });
});

app.get('/artists/:id/availability', (req, res) => {
  let artistId = req.params.id;
  knex('availabilities')
    .select('*')
    .where('artist_id', artistId)
    .then(function(disabledDays) {
      res.json(disabledDays);
    });
});

app.post('/artists/:id/like', (req, res) => {
  let artistId = req.body.artistId;
  let currentUser = req.body.currentUser;
  knex('artist_likes')
    .insert({
      artist_id: artistId,
      client_id: currentUser
    })
    .then(data => {
      knex('artist_likes')
        .where('artist_id', artistId)
        .countDistinct('client_id')
        .then(function (likes) {
          res.json(likes);
        });
    });
});

app.post('/artists/:id/unlike', (req, res) => {
  let artistId = req.body.artistId;
  let currentUser = req.body.currentUser;
  knex('artist_likes')
    .where({ artist_id: artistId, client_id: currentUser })
    .del()
    .then(data => {
      knex('artist_likes')
        .where('artist_id', artistId)
        .countDistinct('client_id')
        .then(function (likes) {
          res.json(likes);
        });
    });
});

app.get('/artists/:id/totallikes', (req, res) => {
  let artistId = req.params.id;
  let currentUser = req.query.currentUser;
  knex('artist_likes')
    .where({ artist_id: artistId })
    .countDistinct('client_id')
    .then((likeCount) => {
      knex('artist_likes')
        .select('artist_id')
        .where('client_id', currentUser)
        .then((likedArtists) => {
          res.json({likedArtists: likedArtists, likeCount: likeCount})
        })
    });
});

app.post("/artists/:id/newreview", (req, res) => {
  let rating = req.body.rating;
  let description = req.body.description;
  let artist_id = req.body.artist_id;
  let user_id = req.body.user_id;
  knex('reviews').insert({
    rating: rating,
    description: description,
    artist_id: artist_id,
    user_id: user_id
  }).then(data => {
    knex('reviews')
      .join('users', 'reviews.user_id', '=', 'users.id')
      .where('reviews.artist_id', artist_id)
      .then((reviews) => {
        res.json(reviews);
      });
  });
});

app.post("/artists/:id/reviews/:reviewid", (req, res) => {
  knex('reviews')
    .del()
    .where('review_id', req.params.reviewid)
    .then(data => {
      knex('reviews')
      .join('users', 'reviews.user_id', '=', 'users.id')
      .where('reviews.artist_id', req.params.id)
      .then((reviews) => {
        res.json(reviews);
      });
    });
});


app.post('/artists/:id/edit', (req, res) => {
  let artistId = req.body.artistId;
  let package1 = req.body.submitData.packages[0];
  let package2 = req.body.submitData.packages[1];
  let package3 = req.body.submitData.packages[2];
  let twitter = req.body.submitData.twitter;
  let facebook = req.body.submitData.facebook;
  let instagram = req.body.submitData.instagram;
  let bio = req.body.submitData.bio;

  knex('users')
    .where('users.id', artistId)
    .update({
      bio: bio,
      twitter_url: twitter,
      instagram_url: instagram,
      facebook_url: facebook
    })
    .returning('*')
    .then(() => {
      knex('price_packages')
        .where({user_id: artistId})
        .del()
        .then(() => {
          knex('price_packages')
            .insert([{
              user_id: artistId,
              tier: Number(package1.tier),
              price: Number(package1.price),
              description: package1.description},
              {user_id: artistId,
              tier: Number(package2.tier),
              price: Number(package2.price),
              description: package2.description},
              {user_id: artistId,
              tier: Number(package3.tier),
              price: Number(package3.price),
              description: package3.description
            }])
            .then((data) => {
              knex('price_packages')
                .join('users', 'price_packages.user_id', '=', 'users.id')
                .where('price_packages.user_id', artistId).orderBy('tier')
                .then((userData) => {
                  res.json(userData);
                });
            });
        });
    });
 });

//OPPORTUNITIES

app.get('/opportunities', (req, res) => {
  knex('events')
    .select('*')
    .join('users', 'users.id', '=', 'events.creator_id')
    .then(function (events) {
      res.json(events);
    });
});

app.get('/opportunities/:id', (req, res) => {
  knex('events')
    .select('*')
    .join('users', 'users.id', '=', 'events.creator_id')
    .where('creator_id', req.params.id)
    .then(function (events) {
      res.json(events);
    });
});

app.get('/opportunities/:id/applicants', (req, res) => {
  knex('event_interests')
    .join('events', 'eventref_id', '=', 'event_id')
    .join('users', 'users.id', '=', 'artist_id')
    .where('creator_id', req.params.id)
    .orderBy('event_id')
    .then(function (events) {
      res.json(events);
    });
});

app.post('/opportunities/:id/add', (req, res) => {
  let cookie = req.body.creator_id;
  let title = req.body.title;
  let description = req.body.description;
  let date = req.body.date;
  let price = req.body.price;
  let location = req.body.location;

  knex('events').insert({
    name: title,
    description: description,
    event_date: date,
    price: price,
    event_location: location,
    creator_id: cookie
  })
  .then(data => {
      knex('events')
        .orderBy('created_at', 'desc')
        .then(moreData => res.json(moreData));
    });
});

app.post('/opportunities/:id/accept', (req, res) => {
  knex('events')
    .where('event_id', req.body.event_id)
    .update('artist_accepted', req.body.artistid)
    .then(data => {
      knex('event_interests')
        .join('events', 'event_id', '=', 'event_interests.eventref_id')
        .join('users', 'users.id', '=', 'artist_id')
        .where('creator_id', req.body.currentUser)
        .orderBy('event_id')
        .then(updatedlist => {
          res.json(updatedlist);
        })
    })
})



app.post("/opportunities/:id/delete", (req, res) => {
  knex('events')
    .del()
    .where('event_id', req.body.event_id)
    .then(data => {
      knex("events")
        .join('users', 'users.id', '=', 'events.creator_id')
        .orderBy('event_date')
        .then(moredata =>
        res.json(moredata));
    });
});

app.get("/opportunities/applied/:id", (req, res) => {
  knex('event_interests')
    .where('artist_id', req.params.id)
    .join('events', 'event_id', '=', 'event_interests.eventref_id')
    .join('users', 'users.id', '=', 'events.creator_id')
    .then(data => {
      res.json(data)
    })
})

app.post("/opportunities/applied/:id", (req, res) => {
  knex('event_interests')
    .del()
    .where('application_id', req.body.application_id)
    .where('artist_id', req.body.currentUser)
    .then(data => {
       knex('event_interests')
        .where('artist_id', req.params.id)
        .join('events', 'event_id', '=', 'event_interests.eventref_id')
        .join('users', 'users.id', '=', 'events.creator_id')
        .then(updatedlist => {
          res.json(updatedlist);
        })
    })
})

app.post("/opportunities/:id/apply", (req, res) => {
  let message = req.body.msg_des
  let artist_name = req.body.artist_name
  knex('event_interests')
    .insert({
      eventref_id: req.body.event_id,
      artist_id: req.body.artist_id
    })
    .then((results) => {
      var data = {
        from: 'Exposure <postmaster@sandboxf438a24c83de468897e03f26d640861d.mailgun.org>',
        to: 'exposure.notifications@gmail.com',
        subject: 'Exposure - Someone just applied to your posting!',
        text: `${artist_name} has applied to your posting and left you a message: ${message}`
      };

      mailgun.messages().send(data, function (error, body) {
        console.log("MESSAGE SENT");
      })

      res.send("Application successfully saved")
    })
});

app.post("/settings", (req, res) => {
  let newFirstName = req.body.firstName;
  let newLastName = req.body.lastName;
  let newEmail = req.body.email;
  let newPassword = req.body.password

  knex('users').where('id', req.session.user_id).update({
    first_name: newFirstName,
    last_name: newLastName,
    email: newEmail,
    password: bcrypt.hashSync(newPassword, 10)}).returning(['first_name', 'last_name', 'email'])
      .then(data => res.json(data))
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});