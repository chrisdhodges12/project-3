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
});

const Resume = model("Resume", resumeSchema);

module.exports = Resume;
