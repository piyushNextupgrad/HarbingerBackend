const mongoose = require("mongoose");
const schema = mongoose.Schema;

const postSchema = schema(
  {
    authorName: { type: String, required: true },

    postHeading: { type: String, required: true },
    postContent: { type: String, required: true },
    postMedia: { type: String },
    postLink: { type: String },
  },
  { timestamps: true }
);

const model = mongoose.model("posts", postSchema);

module.exports = model;
