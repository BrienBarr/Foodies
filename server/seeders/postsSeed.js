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

let postsSeed = [
  {
    created_by: "BrienB",
    category: "recipe",
    title: "Sausage Gravy",
    body: "",
    imageURL: "",
    link: "https://www.foodnetwork.com/recipes/sausage-gravy-2145820",
    ingredients: [
      "1 pound breakfast sausage, hot or mild", 
      "1/3 cup all-purpose flour", 
      "3 to 4 cups whole milk, more to taste",
      "1/2 teaspoon seasoned salt",
      "2 teaspoons freshly ground black pepper, more to taste"
    ],
    instructions: [
      "With your finger, tear small pieces of sausage and add them in a single layer to a large heavy skillet. Brown the sausage over medium-high heat until no longer pink. Reduce the heat to medium-low. Sprinkle on half the flour and stir so that the sausage soaks it all up, then add more little by little. Stir it around and cook it for another minute or so, then pour in the milk, stirring constantly.",
      "Cook the gravy, stirring frequently, until it thickens. (This may take a good 10 to 12 minutes.) Sprinkle in the seasoned salt and pepper and continue cooking until very thick and luscious. If it gets too thick too soon, just splash in another 1/2 cup of milk or more if needed. Taste and adjust the seasoning.",
      "Spoon the sausage gravy over warm biscuits and serve immediately!"
    ],
    likes: 0,
    comments: [],
  },
  {
    created_by: "BrienB",
    category: "restaurant",
    title: "Greek's Pizzeria",
    body: "",
    imageURL: "",
    review: "This is one of my favorite pizza joints.  The crust is flavorful.  I love their breadsticks and cheese sauce.  I highly recommend it!",
    link: "https://greekspizzeria.com/",
    address: "9613 N College Ave, Indianapolis, IN, 46280",
    likes: 0,
    comments: [],
  }
];

db.Post.deleteMany({})
  .then(() => db.Post.collection.insertMany(postsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
