const School = require("../models/School");

exports.addSchool = async (req, res) => {
  try {
    const school = await School.create(req.body);
    res.status(201).json(school);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
exports.getSchools = async (req, res) => {
  const { search } = req.query;

  const query = search
    ? { name: { $regex: search, $options: "i" } }
    : {};

  const schools = await School.find(query);
  res.json(schools);
};
