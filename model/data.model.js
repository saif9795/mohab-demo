const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    permittedUserEmail: {
      type: String,
      required: true,
    },
    datasets: [
      {
        name: String,
        fileUrl: String,
        uploadedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Data = mongoose.model("Data", dataSchema);
module.exports = Data;
