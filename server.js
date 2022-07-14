const express = require("express");
const connectMongo = require("./config/connectMongo");
const app = express();
const PORT = process.env.PORT || 5050;

app.use(express.urlencoded({ extended: true }));
app.use(express.json);

require("dotenv").config();

// connect to mongodb
const uri = process.env.MONGO_URI;
connectMongo(uri);

app.listen(PORT, () => {
  console.log("==> Listening on port: %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});
