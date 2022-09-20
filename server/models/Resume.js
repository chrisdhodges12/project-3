const { Schema, model } = require("mongoose");

const resumeSchema = new Schema({
  username: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  objectiveStatement: {
    type: String,
  },
  schoolName: {
    type: String,
  },
  graduateYear: {
    type: String,
  },
  fieldOfStudy: {
    type: String,
  },
  pastEmployer: {
    type: String,
  },
  datesWorked: {
    type: String,
  },
  position: {
    type: String,
  }
});

const Resume = model("Resume", resumeSchema);

module.exports = Resume;
