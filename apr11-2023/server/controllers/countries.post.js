const database = require("../utilities/database");

module.exports = async (req, res) => {
  // Get database connection
  const db = database.get();

  const { name, countrycode, district, population } = req.body;

  const cityInsert = await db
    .collection("city")
    .insertOne({ name, countrycode, district, population });

  return res.status(200).json(cityInsert);
};
