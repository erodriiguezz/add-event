const express = require("express");
const cors = require("cors");
const connectMongo = require("./config/connectMongo");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json);
app.use(cors());

require("dotenv").config();

// connect to mongodb
const uri = process.env.MONGO_URI;
connectMongo(uri);

// api
require("./routes/user")(app);

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log("==> Listening on port: %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});
