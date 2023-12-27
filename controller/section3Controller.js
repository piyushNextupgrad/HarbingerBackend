const section3Model = require("../model/section3model");
const postData = async (req, resp) => {
  try {
    const section = new section3Model({
      sectionName: req.body.sectionName,
      sectionHeading: req.body.sectionHeading,
      sectionContent1: req.body.sectionContent1,
      sectioncontent2: req.body.sectioncontent2,
      link1: req.body.link1,
      link2: req.body.link2,
    });
    const data = await section.save();

    resp.json({ success: true, data: data });
  } catch (err) {
    resp.json({ success: false, message: err.message });
  }
};

const getData = async (req, resp) => {
  try {
    const data = await section3Model.find({});
    resp.json({ success: true, data: data });
  } catch (err) {
    resp.json({ success: false, message: err.message });
  }
};

const putData = async (req, resp) => {
  try {
    data = await section3Model.findByIdAndUpdate(req.body.id, {
      sectionName: req.body.sectionName,
      sectionHeading: req.body.sectionHeading,
      sectionContent1: req.body.sectionContent1,
      sectioncontent2: req.body.sectioncontent2,
      link1: req.body.link1,
      link2: req.body.link2,
    });

    resp.json({ success: true, message: "record updated" });
  } catch (err) {
    resp.json({ success: false, message: err.message });
  }
};

const delData = async (req, resp) => {
  try {
    data = await section3Model.findByIdAndDelete(req.body.id);

    resp.json({ success: true, message: "record deleted" });
  } catch (err) {
    resp.json({ success: false, message: err.message });
  }
};

module.exports = { postData, getData, putData, delData };
