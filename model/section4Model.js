const mongoose = require("mongoose");
const schema = mongoose.Schema;

const section4Model = schema(
  {
    sectionName: { type: String, required: true },
    sectionHeading: { type: String, required: true },
    sectionContent1: { type: String, required: true },
    sectioncontent2: { type: String },
    link1: { type: String },
    buttonText: { type: String },
  },
  { timestamps: true }
);

const model = mongoose.model("section4", section4Model);

module.exports = model;
