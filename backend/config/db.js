const mongoose = require("mongoose");
// console.log(process.env.MONGO_DB_URL);
const MONGODB_URL = process.env.MONGO_DB_URL;

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(MONGODB_URL);
    console.log("Mongodb connection successful");
  } catch (error) {
    console.log("Mongodb connection Error", error);
  }
};

module.exports = connectDB;
