const mongoose = require("mongoose");
// mongoose
//   .connect("mongodb://127.0.0.1:27017/harbinger")
//   .then((result) => console.log("connected"))
//   .catch((err) => console.log(err));

mongoose
  .connect(
    "mongodb+srv://Piyush:Piyush@cluster0.akvcs4v.mongodb.net/harbinger?retryWrites=true&w=majority"
  )
  .then((result) => console.log("connected"))
  .catch((err) => console.log(err));
