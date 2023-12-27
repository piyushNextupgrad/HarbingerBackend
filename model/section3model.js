const mongoose = require("mongoose");
const schema = mongoose.Schema;

const section3schema = schema(
  {
    sectionName: { type: String, required: true },
    sectionHeading: { type: String, required: true },
    sectionContent1: { type: String, required: true },
    sectioncontent2: { type: String },
    link1: { type: String },
    link2: { type: String },
  },
  { timestamps: true }
);

const model = mongoose.model("section3", section3schema);

module.exports = model;
