const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Database Connected");
    })
    .catch((error) => {
      console.log("Mongodb connection error", error.message);
    });
};

module.exports = connectDB;
