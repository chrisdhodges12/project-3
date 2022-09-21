const { Schema, model } = require("mongoose");

const educationSchema = new Schema({
  firstSchoolName: {
    type: String,
  },
  firstGraduateYear: {
    type: String,
  },
  firstFieldOfStudy: {
    type: String,
  },
  secSchoolName: {
    type: String,
  },
  secGraduateYear: {
    type: String,
  },
  secFieldOfStudy: {
    type: String,
  },
});

const Education = model("Education", educationSchema);

module.exports = Education;
