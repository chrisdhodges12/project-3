// eslint-disable-next-line no-unused-vars
import React from "react";
import { Grid } from "@material-ui/core";

const ResumeTemplate = ({ resumes }) => {
  if (!resumes.length) {
    return <h3> No resumes yet. Create one! </h3>;
  }

  return (
    <Grid direction="column" container>
      {resumes &&
        resumes.map((resume) => (
          <Grid item>
            <div key={resume._id}>
              <h1>_________________</h1>
              <p>
                {resume.firstName} {resume.lastName}
              </p>
              <p>{resume.email}</p>
              <p>{resume.phone}</p>
              <p>{resume.objectiveStatement}</p>
              <p>{resume.schoolName}</p>
              <p>{resume.graduateYear}</p>
              <p>{resume.fieldOfStudy}</p>
              <p>{resume.pastEmployer}</p>
              <p>{resume.datesWorked}</p>
              <p>{resume.position}</p>
              <p>{resume.skills}</p>
            </div>
          </Grid>
        ))}
    </Grid>
  );
};

export default ResumeTemplate;
