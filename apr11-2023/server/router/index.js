const express = require("express");
const router = express.Router();

router.get("/countries", require("../controllers/countries.get"));

router.post("/countries", require("../controllers/countries.post"));

module.exports = router;