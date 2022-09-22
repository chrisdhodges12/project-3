const { Schema, model } = require("mongoose");

const projectSchema = new Schema({
  firstPastEmployer: {
    type: String,
  },
  firstDatesWorked: {
    type: String,
  },
  firstPosition: {
    type: String,
  },
  secPastEmployer: {
    type: String,
  },
  secDatesWorked: {
    type: String,
  },
  secPosition: {
    type: String,
  },
});

const Project = model("Project", projectSchema);

module.exports = Project;
