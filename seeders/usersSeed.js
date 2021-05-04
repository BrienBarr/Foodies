let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/Foodies", 
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
  }
);

let usersSeed = [
  {
    email: "barrdom@hotmail.com",
    email_is_verified: false,
    password: "4metalh",
    userName: "BrienB",
    first_name: "Brien",
    last_name: "Barr",
    description: "I love pizza.  I like to cook food when I'm not staying up all night coding or taking care of the twins.",

  },
  
];

db.User.deleteMany({})
  .then(() => db.User.collection.insertMany(usersSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
