const { Schema, model } = require("mongoose");
const dateFormat = require('../utils/dateFormat');

const resumeSchema = new Schema({
  username: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => dateFormat(timestamp)
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
  },
  skills: {
    type: [String]
  }
});

const Resume = model("Resume", resumeSchema);

module.exports = Resume;
