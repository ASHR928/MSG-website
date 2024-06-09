const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

require("dotenv").config();

const allowedOrigins = ["http://localhost:3000"];

app.use(
  cors({
    credentials: true,
    origin: allowedOrigins,
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Origin",
      "Access-Control-Allow-Origin",
    ],
  })
);

app.use(bodyParser.urlencoded({ extended: true }));

const user = require("./routes/userRoute");
const exhibition = require("./routes/exhibitionRoute");

app.use("/api/v1/user", user);
app.use("/api/v1/exhibition", exhibition);

app.use(express.static(path.join(__dirname, "public")));

module.exports = app;

app.use(express.json());
