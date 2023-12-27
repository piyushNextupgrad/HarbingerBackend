const userModel = require("../model/userModel");
var jwt = require("jsonwebtoken");
const { generateToken } = require("../middlewares/middlewares");

async function postUser(req, resp) {
  try {
    const user = new userModel({
      username: req.body.username,
      password: req.body.password,
      name: req.body.name,
      email: req.body.email,
      dob: req.body.dob,
    });
    const data = await user.save();
    resp.json({ success: true, msg: "user created successfuly" });
  } catch (err) {
    console.log(err.message);
    resp.json({ success: false, msg: err.message });
  }
}

async function getUser(req, resp) {
  try {
    const data = await userModel.find({});

    resp.json({ success: true, msg: "user found", data: data });
  } catch (err) {
    console.log(err.message);
    resp.json({ success: false, msg: err.message });
  }
}

async function putUser(req, resp) {
  try {
    const data = await userModel.findByIdAndUpdate(req.body.id, {
      username: req.body.username,
      password: req.body.password,
      name: req.body.name,
      email: req.body.email,
      dob: req.body.dob,
    });

    resp.json({ success: true, msg: "user data updated", data: data });
  } catch (err) {
    console.log(err.message);
    resp.json({ success: false, msg: err.message });
  }
}

async function deleteUser(req, resp) {
  try {
    const data = await userModel.findByIdAndDelete(req.body.id);

    resp.json({ success: true, msg: "user record deleted", data: data });
  } catch (err) {
    console.log(err.message);
    resp.json({ success: false, msg: err.message });
  }
}

async function findUser(req, resp) {
  try {
    const data = await userModel.find({
      email: req.body.email,
      password: req.body.password,
    });
    console.log(req.body.email);
    console.log(req.body.password);
    if (data.length > 0) {
      const token = generateToken();
      resp.json({ success: true, msg: "user found", data: data, token: token });
    } else {
      resp.json({ success: false, msg: "user not found", data: data });
    }
  } catch (err) {
    console.log(err.message);
    resp.json({ success: false, msg: err.message });
  }
}
module.exports = { postUser, getUser, putUser, deleteUser, findUser };
