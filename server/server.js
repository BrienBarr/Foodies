const express = require ("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const mongoose = require("mongoose");

//imports our passport middleware
const passport = require("./passport/setup");
//imports our login authentication routes
const auth = require("./routes/auth");
const routes = require("./routes/api-routes");
const app = express();
const port = process.env.PORT || 3001;
const MONGODB_URI = "mongodb://localhost/Foodies"

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }
  
mongoose.connect
    (process.env.MONGODB_URI || MONGODB_URI , { useNewUrlParser: true})
    .then(console.log(`mongoDB connected at ${MONGODB_URI}`))
    .catch(err => console.log(err));
    // process.env.MONGODB_URI || "mongodb://localhost/Foodies",
    // { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
  
//middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use(
//     session({
//         secret: "very secret this is",
//         resave: false,
//         saveUninitialized: true,
//         store: new MongoStore({ mongooseConnection: mongoose.connection})
//     })
// );
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/auth", auth);
// app.get("/", (req, res) => res.send("hello world"));
app.use(routes);

app.listen(port, () => console.log(
    `example app listening on port ${port}!`
));