//importing packages...................
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
const { verifyToken } = require("./middlewares/middlewares");

//.........................

require("./db/connection");

//importing router.......
const userRouter = require("./routes/userRoute");
const section1Router = require("./routes/section1Route");
const postRouter = require("./routes/postRoute");
const section3Router = require("./routes/section3route");
const section4Router = require("./routes/section4Route");
//......................
const app = express();

//using middlewares.........................
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//.........................

//defining routes.........................
app.use("/user", userRouter);
app.use("/section1", section1Router);
app.use("/articles", postRouter);
app.use("/section3", section3Router);
app.use("/section4", section4Router);
//...........................

//404 middleware..........................
app.use((req, res) => {
  res.json({
    error: "404",
    message: "Route you were looking for was not found",
  });
});
//........................................

app.listen(5000, () => {
  console.log("Listening");
});
