const mongoose = require("mongoose");

const connectMongo = async (uri) => {
  try {
    await mongoose.connect(uri, { useNewUrlParser: true });
    console.log("==> MongoDB is connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectMongo;
