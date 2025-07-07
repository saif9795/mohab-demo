const Data = require("../model/data.model.js");


const postData = async (req, res) => {
  try {
    const { companyName, permittedUserEmail } = req.body;
    const files = req.files || [];

    const datasets = files.map((file) => ({
      name: file.originalname,
      fileUrl: file.path,
      uploadedAt: new Date(),
    }));

    if (companyName && permittedUserEmail && datasets.length > 0) {
      const data = new Data({
        companyName,
        permittedUserEmail,
        datasets,
      });

      await data.save();
      return res.status(201).json({
        success: true,
        message: "Data uploaded successfully",
        data,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Invalid input data",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

const getData = async (req, res) => {
  try {
    const { companyName } = req.query;
    const data = await Data.find(companyName ? { companyName } : {}).select(
      "-__v"
    );
    if (!data || data.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No data found",
        data: [],
      });
    }
    return res.status(200).json({
      success: true,
      message: "Data retrieved successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

module.exports = {
  postData,
  getData,
};
