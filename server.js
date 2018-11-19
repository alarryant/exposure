require('dotenv').config();
const env = process.env.ENV || 'development';

const express = require("express");
const app = express();
const PORT = 3001;
const bodyParser = require("body-parser")
// ****** bcry[t]
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const knexConfig = require('./knexfile');
const knex = require('knex')(knexConfig[env]);
const morgan = require('morgan');
const knexLogger = require('knex-logger');


app.use(express.static('public'));


// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
// app.use(knexLogger(knex));


function randomImgGenerator(category) {
  // knex('images').where("specialization", "=", category).orderBy(random()).limit(6);
};



// --------------- HELPER FUNCTIONS --------------- //

const findUser = (userEmail) => {
  console.log(knex('users').select('*').where('email = ?', [userEmail]));
}

// const findUser = (userReq) => {
//   return database.raw("SELECT * FROM users WHERE username = ?", [userReq.username])
//     .then((data) => data.rows[0])
// }

// const checkPassword = (reqPassword, foundUser) => {
//   return new Promise((resolve, reject) =>
//     bcrypt.compare(reqPassword, foundUser.password_digest, (err, response) => {
//         if (err) {
//           reject(err)
//         }
//         else if (response) {
//           resolve(response)
//         } else {
//           reject(new Error('Passwords do not match.'))
//         }
//     })
//   )
// }

// const updateUserToken = (token, user) => {
//   return database.raw("UPDATE users SET token = ? WHERE id = ? RETURNING id, username, token", [token, user.id])
//     .then((data) => data.rows[0])
// }




// --------------- ROUTES --------------- //

//TESTING ONLY - Shows req.path

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

///////////////
app.get("/home", (req, res) => {
  knex('images').select('id', 'src', 'category')
      .asCallback((err, data) => {
        if (err) throw err;
        res.json(data);
      });
});

// LOGIN
app.post("/login", (req, res) => {
  let userEmail = req.body.email;
  let userPassword = req.body.password;
  // console.log("Email", req.body.email)
  // console.log("Password", req.body.password)
  res.send("Login");
});


// const userReq = request.body
//   let user

//   findUser(userReq)
//     .then(foundUser => {
//       user = foundUser
//       return checkPassword(userReq.password, foundUser)
//     })
//     .then((res) => createToken())
//     .then(token => updateUserToken(token, user))
//     .then(() => {
//       delete user.password_digest
//       response.status(200).json(user)
//     })
//     .catch((err) => console.error(err))
// }



app.post("/register", (req, res) => {
  res.send("Register");
});


// SEARCH
app.get("/search", (req, res) => {
  console.log("Search Page");
  res.send("Search Page");
});


app.post("/search", (req, res) => {
  console.log(req.body.searchWord);
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