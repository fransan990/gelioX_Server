const { Schema, model } = require("mongoose");

const commentSchema = new Schema(
    {
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        product: {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        },
        description: String
    },
    {
        timestamps: true
    }
);

const Comment = model("Comment", commentSchema);

module.exports = Comment;