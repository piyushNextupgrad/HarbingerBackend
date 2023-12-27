const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    dob: { type: Date, required: true },
  },
  { timestamps: true }
);

const model = mongoose.model("users", userSchema);

module.exports = model;
