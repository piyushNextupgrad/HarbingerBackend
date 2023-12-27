const express = require("express");
const router = express.Router();

const { upload } = require("../middlewares/middlewares");
const {
  postData,
  getData,
  putData,
  delData,
} = require("../controller/section3Controller");

router.post("/api/postSection3", upload.none(), postData);
router.get("/api/getSection3", getData);
router.put("/api/putSection3", upload.none(), putData);
router.delete("/api/delSection3", upload.none(), delData);

module.exports = router;
