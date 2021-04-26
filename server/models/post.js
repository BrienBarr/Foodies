const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    created_by: {
      type: String
        // type: Schema.Types.ObjectId,
        // ref: 'User',
        // required: true
    },
    category: {
        type: String,
        default: "recipe"
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        trim: true
    },
    review: {      // unless we want this to be whole numbers only
        type: mongoose.Decimal128
    },
    link: {
        type: String
    },
    address: {
        type: String
    },
    ingredients: {  // set up to list the ingredients as array of strings but can be changed to just string if needed
        type: [String]
    },
    instructions: {  // set up to list the instructions as array of strings but can be changed to just string if needed
        type: [String]
    },
    likes: {
        type: Number
    },
    comments: { // set up to list comments as array of strings
        type: [String]
    },
    day: {
        type: Date,
        default: Date.now()
    }
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;