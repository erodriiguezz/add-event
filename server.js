const express = require("express");
const cors = require("cors");

const connectMongo = require("./config/connectMongo");

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("dotenv").config();

// connect to mongodb atlas
const uri = process.env.ATLAS_URI;
connectMongo("mongodb+srv://erodriiguezz:NhCxMQp1tAleu0Wp@cluster0.ybu8p.mongodb.net/?retryWrites=true&w=majority");

// api
const userRouter = require("./routes/user");
app.use("/api/users", userRouter);

app.listen(port, () => {
  console.log("==> Listening on port: %s. Visit http://localhost:%s/ in your browser.", port, port);
});
