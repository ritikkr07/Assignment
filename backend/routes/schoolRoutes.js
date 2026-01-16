const express = require("express");
const router = express.Router();
const {
  addSchool,
  getSchools
} = require("../controllers/schoolController");

router.post("/schools", addSchool);
router.get("/schools", getSchools);

module.exports = router;
