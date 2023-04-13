const database = require("../utilities/database");

module.exports = async (req, res) => {
  try {
    // Get database connection
    const db = database.get();

    const cities = await db.collection("city").find().toArray();
    
    return res.status(200).json(cities);
  } catch (error) {
    console.log(error);
  }
};
