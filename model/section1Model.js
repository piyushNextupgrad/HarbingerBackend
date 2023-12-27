const mongoose = require("mongoose");
const schema = mongoose.Schema;

const section1Schema = schema(
  {
    imagePath: { type: String, required: true },
    keyName: { type: String, required: true },
    link: { type: String, required: true },
  },
  { timestamps: true }
);

const model = mongoose.model("section1", section1Schema);

module.exports = model;
