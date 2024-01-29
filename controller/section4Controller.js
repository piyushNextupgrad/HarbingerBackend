const section4Model = require("../model/section4Model");
require("dotenv").config();
const postData = async (req, resp) => {
  try {
    const section = new section4Model({
      sectionName: req.body.sectionName,
      sectionHeading: req.body.sectionHeading,
      sectionContent1: req.body.sectionContent1,
      sectioncontent2: req.body.sectioncontent2,
      link1: req.body.link1,
      buttonText: req.body.buttonText,
    });
    const data = await section.save();

    resp.json({ success: true, data: data });
  } catch (err) {
    resp.json({ success: false, message: err.message });
  }
};

const getData = async (req, resp) => {
  try {
    const data = await section4Model.find({});
    resp.json({ success: true, data: data });
  } catch (err) {
    resp.json({ success: false, message: err.message });
  }
};

const putData = async (req, resp) => {
  try {
    data = await section4Model.findByIdAndUpdate(req.body.id, {
      sectionName: req.body.sectionName,
      sectionHeading: req.body.sectionHeading,
      sectionContent1: req.body.sectionContent1,

      link1: req.body.link1,
      buttonText: req.body.buttonText,
    });

    resp.json({ success: true, message: "record updated" });
  } catch (err) {
    resp.json({ success: false, message: err.message });
  }
};

const delData = async (req, resp) => {
  try {
    data = await section4Model.findByIdAndDelete(req.body.id);

    resp.json({ success: true, message: "record deleted" });
  } catch (err) {
    resp.json({ success: false, message: err.message });
  }
};

module.exports = { postData, getData, putData, delData };
