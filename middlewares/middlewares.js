const path = require("path");
//multer packages and middlewares...........
const multer = require("multer");
var jwt = require("jsonwebtoken");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const originalExtension = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix + originalExtension);
  },
});
const upload = multer({ storage: storage });

//.........................
function generateToken() {
  const secret = "secretKeyHarbingerProject-NextupgradWebSolutions";
  const token = jwt.sign(
    {
      data: "foobar",
    },
    secret,
    { expiresIn: "3h" }
  );
  return token;
}

function verifyToken(req, resp, next) {
  const secret = "secretKeyHarbingerProject-NextupgradWebSolutions";
  var decoded = jwt.verify(req.body.token, secret);
  console.log("decoded token", decoded);
}
module.exports = { upload, generateToken, verifyToken };
