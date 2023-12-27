const express = require("express");
const router = express.Router();
const postModel = require("../model/postModel");
const { upload } = require("../middlewares/middlewares");
const {
  postData,
  getData,
  putData,
  delData,
} = require("../controller/postController");

router.post(
  "/api/postArticle",
  upload.fields([{ name: "articleMedia", maxCount: 1 }]),
  postData
);
router.get("/api/getArticle", getData);
router.put(
  "/api/putArticle",
  upload.fields([{ name: "articleMedia", maxCount: 1 }]),
  putData
);
router.post("/api/delArticle", upload.none(), delData);

module.exports = router;
