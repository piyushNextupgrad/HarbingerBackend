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

function verifyToken(req, res, next) {
  if (req.method === "POST" || req.method === "PUT") {
    // Extract token from req.body
    const token = req.body.token;

    // Verify the token
    jwt.verify(
      token,
      "secretKeyHarbingerProject-NextupgradWebSolutions",
      (err, decoded) => {
        if (err) {
          // If token verification fails, send a 403 response
          return res.status(403).json({
            success: false,
            error: "Invalid token",
            message: "email or password is incorrect",
          });
        }

        // If token is valid, save decoded info to request for use in other routes
        req.user = decoded;

        // Proceed to next middleware
        next();
      }
    );
  } else {
    // If not a POST or PUT request, proceed to next middleware
    next();
  }
}
module.exports = { upload, generateToken, verifyToken };
