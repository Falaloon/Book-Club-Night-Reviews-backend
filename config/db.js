const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:adminmongo@cluster0.txkyaei.mongodb.net/roifon"
      // process.env.Database
    );
    console.log("DB connected");
  } catch (error) {
    console.log(err);
  }
};

module.exports = connectDB;
