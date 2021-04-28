const express = require ("express");
const mongoose = require("mongoose");
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const randomToken = require('random-token');
const app = express();
// const session = require("express-session");
// const MongoStore = require("connect-mongo");


// app.use('/login', (req, res) => {
//   randomToken.create('abcdefghijklmnopqrstuvwxzyABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789');
//   let userToken = randomToken(8);
//   res.send({
//     token: userToken
//   });
// });

//imports our passport middleware
// const passport = require("./passport/setup");
//imports our login authentication routes
// const auth = require("./routes/auth");
const routes = require("./routes");
const authRoutes = require('./routes/auth');
const { db } = require('./models/User');



const port = process.env.PORT || 3001;
const MONGODB_URI = "mongodb://localhost/Foodies"

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
  
mongoose.connect
    (process.env.MONGODB_URI || MONGODB_URI , { 
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    })
    .then(console.log(`mongoDB connected at ${MONGODB_URI}`))
    .catch(err => console.log(err));

//middleware
app.use(bodyParser.json());
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.use(passport.initialize());
// app.use(passport.session());

//routes middleware
// app.use('/api', authRoutes);
app.use('/', authRoutes);
app.use(routes);


app.listen(port, () => console.log(
    `example app listening on port ${port}!`
));