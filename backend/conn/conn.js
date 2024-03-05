const mongoose = require("mongoose");

const conn = async (req, res) => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://wwwvivekeduchigure:9029022316@cluster0.pllvfrj.mongodb.net/"
      )
      .then(() => {
        console.log("connected");
      });
  } catch (error) {
    res.status(400).json({
      message: "Not Connected",
    });
  }
};

conn();
