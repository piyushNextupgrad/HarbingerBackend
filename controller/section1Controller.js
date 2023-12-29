const section1Model = require("../model/section1Model");
const path = require("path");
const postImage = async (req, res) => {
  try {
    // req.files is an object where fieldname is the key and the value is an array of files
    /*
    req.files = {
      'image1': [{...file1}],
      'image2': [{...file2}],
      'image3': [{...file3}],
      'image4': [{...file4}]
    }
  */

    // You can now use req.files['image1'][0].path to get the path of the uploaded file

    const image1 =
      "https://harbinger-backend.onrender.com/uploads/" +
      req.files["image1"][0].filename;

    const record = new section1Model({
      imagePath: image1,
      keyName: req.body.keyName,
      link: req.body.link,
    });

    record.save();

    // Send a response to the client
    res.json({
      success: true,
      message: "Images uploaded successfully!",
      paths: image1,
    });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};

const getData = async (req, resp) => {
  try {
    const data = await section1Model.find({});
    resp.json({ success: true, data: data });
  } catch (err) {
    resp.json({ success: false, message: err.message });
  }
};

const putData = async (req, res) => {
  try {
    // req.files is an object where fieldname is the key and the value is an array of files
    /*
    req.files = {
      'image1': [{...file1}],
      'image2': [{...file2}],
      'image3': [{...file3}],
      'image4': [{...file4}]
    }
  */

    // You can now use req.files['image1'][0].path to get the path of the uploaded file
    console.log("req.body", req.body.id);
    if (req.files["image1"]) {
      const image1 =
        "https://harbinger-backend.onrender.com/uploads/" +
        req.files["image1"][0]?.filename;
      const data = await section1Model.findByIdAndUpdate(req.body.id, {
        imagePath: image1,
        keyName: req.body.keyName,
        link: req.body.link,
      });
      console.log("result", data);
    } else {
      const data = await section1Model.findByIdAndUpdate(req.body.id, {
        keyName: req.body.keyName,
        link: req.body.link,
      });
    }

    // Send a response to the client
    res.json({
      success: true,
      message: "Data updated successfully!",
    });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};

const delData = async (req, resp) => {
  try {
    // console.log("API HIT");
    // console.log(req.body.id);
    const data = await section1Model.findByIdAndDelete(req.body.id);
    resp.json({ success: true, data: data, msg: "Record Deleted" });
  } catch (err) {
    resp.json({ success: false, message: err.message });
  }
};
module.exports = { postImage, getData, putData, delData };
