require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");

const app = express();

app.use(morgan("dev"));
app.use(helmet());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(require("./router"));

app.listen(process.env.PORT || 3000);