// eslint-disable-next-line no-unused-vars
import React from "react";
import {  Box, Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ReactToPdf from "react-to-pdf";
import "./resumeStyle.css";
const ref = React.createRef();


const ResumeTemplate = ({ resumes }) => {
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
                    {""}
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
                          Name: {resume.firstName} {""}
                          {resume.lastName}
                        </li>
                        <li>Email: {resume.email}</li>
                        <li>Phone: {resume.phone}</li>
                      </ul>
                      <p> Objective : {resume.objectiveStatement}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="education">
                <div className="box title">
                  <h4>Education</h4>
                </div>
                <div className="box content">
                  <ul>
                    <li>
                      <b>{resume.fieldOfStudy}</b> <br />{" "}
                      <i>{resume.schoolName}</i> {resume.graduateYear}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="recent-work">
                <div className="box title">
                  <h4>Work Experience</h4>
                </div>
                <div className="box content">
                  <ul>
                    <li>
                      <b>{resume.position}</b> <br />{" "}
                      <i>{resume.pastEmployer}</i> {resume.datesWorked}
                    </li>
                  </ul>
                </div>
              </div>
              <br />
              <div className="Buttons">
                <ReactToPdf
                  targetRef={ref}
                  filename={`Resume-${resumes.firstName}.pdf`}
                  x={5}
                >
                  {({ toPdf }) => (
                    <div className="pdfButton">
                      <Button
                        color="secondary"
                        variant="contained"
                        sx={{ ml: 3 }}
                        onClick={toPdf}
                      >
                        Generate PDF
                      </Button>
                    </div>
                  )}
                </ReactToPdf>
              </div>
            </div>
          ))}
        ;
      </div>
    </div>
        
    )    
};

export default ResumeTemplate;