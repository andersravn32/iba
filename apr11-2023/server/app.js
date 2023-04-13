require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const database = require("./utilities/database");

const app = express();

const init = async () => {
  await database.connect();

  app.use(morgan("dev"));
  app.use(helmet());
  app.use(cors({ origin: "*" }));
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use(require("./router"));

  app.listen(process.env.PORT || 3000);
};

init();
