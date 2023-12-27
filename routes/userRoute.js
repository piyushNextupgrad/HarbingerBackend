const express = require("express");
const {
  postUser,
  getUser,
  putUser,
  deleteUser,
  findUser,
} = require("../controller/userController");

const { upload, verifyToken } = require("../middlewares/middlewares");

const router = express.Router();

router.post("/api/postUser", verifyToken, upload.none(), postUser);

router.get("/api/getUser", upload.none(), getUser);

router.put("/api/putUser", verifyToken, upload.none(), putUser);

router.delete("/api/deleteUser", verifyToken, upload.none(), deleteUser);
router.post("/api/findUser", upload.none(), findUser);
module.exports = router;
