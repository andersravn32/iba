const express = require("express");
const router = express.Router();

router.get("/countries", require("../controllers/countries.get"));

router.post("/countries", require("../controllers/countries.post"));

router.get("/cities", require("../controllers/cities.get"));

module.exports = router;