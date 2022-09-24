import React from "react";
import Button from "@material-ui/core/Button";
import ReactToPdf from "react-to-pdf";
import "./resumeStyle.css";
const ref = React.createRef();

const Template2 = ({ resumes, educations, projects }) => {
  // if (!resumes.length) {
  //     return <h3> No resumes yet. Create one! </h3>;

  return (
    <div>
      <div id="print" direction="column" container>
        {resumes &&
          resumes.map((resume) => (
            <div className="container" ref={ref}>
              <div className="head-container" key={[resume._id]}>
                <div className="head">
                  <h1>
                    {resume.firstName}
                    {" "}
                    {resume.lastName}
                  </h1>
                  <h3>{resume.email}</h3>
                </div>
              </div>
              <div className="personal-information">
                <div className="box title">
                  <h4>Personal Information</h4>
                </div>
                <div className="box content">
                  <div className="row-container">
                    <div className="class-1">
                      <ul>
                        <li>
                          Name: {resume.firstName} {" "}
                          {resume.lastName}
                        </li>
                        <li>Email: {resume.email}</li>
                        <li>Phone: {resume.phone}</li>
                      </ul>
                      <span> <b>Objective </b>{resume.objectiveStatement}</span>
                      <br/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="education" key={[educations._id]}> 
                <div className="box title">
                  <h4>Education</h4>
                </div>
                <div className="box content">
                  {educations &&
                    educations.map((education) => (
                      <ul>
                        <li>
                          <b>{education.firstFieldOfStudy}</b> <br />{" "}
                          <i>{education.firstSchoolName}</i>{" "}
                          {education.firstGraduateYear}
                        </li>
                        <li>
                          <b>{education.secFieldOfStudy}</b> <br />{" "}
                          <i>{education.secSchoolName}</i>{" "}
                          {education.secGraduateYear}
                        </li>
                      </ul>
                    ))}
                </div>
              </div>
              <div className="recent-work" key={[projects._id]}>
                <div className="box title">
                  <h4>Work Experience</h4>
                </div>
                <div className="box content">
                  {projects &&
                    projects.map((project) => (
                      <ul>
                        <li>
                          <b>{project.firstPosition}</b> <br />{" "}
                          <i>{project.firstPastEmployer}</i>{" "}
                          {project.firstDatesWorked}
                        </li>
                        <li>
                          <b>{project.secPosition}</b> <br />{" "}
                          <i>{project.secSchoolName}</i>{" "}
                          {project.secGraduateYear}
                        </li>
                      </ul>
                    ))}
                </div>
              </div>
              <br />
            </div>
          ))}
        <div className="Buttons">
                <ReactToPdf
                  targetRef={ref}
                  filename='Resume.pdf'
                  x={5}
                >
                  {({ toPdf }) => (
                    <div className="pdfButton">
                      <Button
                        color="secondary"
                        variant="contained"
                        sx={{ ml: 5 }}
                        onClick={toPdf}
                        style={{
                          minWidth: "13vw",
                          minHeight: "4vh",
                          fontSize: "2rem",
                          padding: "1rem"
                        }}
                      >
                        Generate PDF
                      </Button>
                    </div>
                  )}
                </ReactToPdf>
              </div>
      </div>
    </div>
  );
};

export default Template2;
