const postModel = require("../model/postModel");
require("dotenv").config();
const postData = async (req, resp) => {
  try {
    const postImage =
      process.env.SITEURL + "/uploads/" + req.files["articleMedia"][0].filename;
    const post = new postModel({
      authorName: req.body.authorName,

      postHeading: req.body.postHeading,
      postContent: req.body.postContent,
      postMedia: postImage,
      postLink: req.body.postLink,
    });
    const data = await post.save();

    resp.json({ success: true, data: data });
  } catch (err) {
    resp.json({ success: false, message: err.message });
  }
};

const getData = async (req, resp) => {
  try {
    const data = await postModel.find({});
    resp.json({ success: true, data: data });
  } catch (err) {
    resp.json({ success: false, message: err.message });
  }
};

const putData = async (req, resp) => {
  try {
    let data;

    if (req?.files?.articleMedia?.length > 0) {
      // console.log("With media");
      const postImage =
        process.env.SITEURL +
        "/uploads/" +
        req.files["articleMedia"][0].filename;

      data = await postModel.findByIdAndUpdate(req.body.id, {
        authorName: req.body.authorName,

        postHeading: req.body.postHeading,
        postContent: req.body.postContent,
        postMedia: postImage,
        postLink: req.body.postLink,
      });
    } else {
      // console.log("Without media");
      data = await postModel.findByIdAndUpdate(req.body.id, {
        authorName: req.body.authorName,
        postName: req.body.postHeading,
        postHeading: req.body.postHeading,
        postContent: req.body.postContent,
        postLink: req.body.postLink,
      });
    }

    resp.json({ success: true, data: data });
  } catch (err) {
    resp.json({ success: false, message: err.message });
  }
};

const delData = async (req, resp) => {
  try {
    data = await postModel.findByIdAndDelete(req.body.id);

    resp.json({ success: true, message: "record deleted" });
  } catch (err) {
    resp.json({ success: false, message: err.message });
  }
};

module.exports = { postData, getData, putData, delData };
