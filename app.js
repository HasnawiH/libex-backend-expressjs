//===== configuration
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const logger = require("morgan");
const router = require("./src/Routes/index");
const app = express();
const PORT = process.env.PORT || 8000;
// const multer = require('multer')
// const path = require('path');

app.listen(PORT, () => {
  console.log(`Server  is running at ${PORT}`);
});


app.use(logger("dev"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(cors());
app.use(helmet.xssFilter());
app.use("/", router);


