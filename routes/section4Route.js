const express = require("express");
const router = express.Router();

const { upload } = require("../middlewares/middlewares");
const {
  postData,
  getData,
  putData,
  delData,
} = require("../controller/section4Controller");

router.post("/api/postSection4", upload.none(), postData);
router.get("/api/getSection4", getData);
router.put("/api/putSection4", upload.none(), putData);
router.delete("/api/delSection4", upload.none(), delData);

module.exports = router;
