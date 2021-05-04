const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    Created_by: {
        type: Schema.Types.ObjectId,
        ref: "Users"
    },
    Comment: {
        type: String
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: "post"
    }
})
const Comments = mongoose.model("Comments", CommentSchema);

module.exports = Comments;
