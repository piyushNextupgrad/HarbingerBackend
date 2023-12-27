const express = require("express");
const router = express.Router();
const section1Model = require("../model/section1Model");
const path = require("path");
const {
  postImage,
  getData,
  putData,
  delData,
} = require("../controller/section1Controller");

const { upload } = require("../middlewares/middlewares");

router.post(
  "/postImages",
  upload.fields([{ name: "image1", maxCount: 1 }]),
  postImage
);
router.get("/getData", getData);
router.put(
  "/putData",
  upload.fields([{ name: "image1", maxCount: 1 }]),
  putData
);
router.post("/delData", upload.none(), delData);

module.exports = router;
