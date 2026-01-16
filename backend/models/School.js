const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: String,
  country: String,
  contactEmail: String,
  website: String,
  description: String,
}, { timestamps: true });

module.exports = mongoose.model("School", schoolSchema);
