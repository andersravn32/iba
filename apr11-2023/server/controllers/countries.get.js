const countries = require("../content/countries.json");
const database = require("../utilities/database");

module.exports = async (req, res) => {
  try {
    // Get database connection
    const db = database.get();

    const countries = await db.collection("country").find().toArray();
    
    return res.status(200).json(countries);
  } catch (error) {
    console.log(error);
  }
};
