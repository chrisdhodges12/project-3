import React from "react";
import Button from "@material-ui/core/Button";
import ReactToPdf from "react-to-pdf";
import "../../resources/templates.css";
const ref = React.createRef();

const Template1 = ({ resumes, educations, projects }) => {
  // if (!resumes.length) {
  //     return <h3> No resumes yet. Create one! </h3>;

  return (
    <div>
      <div id="print" className="template1-parent" ref={ref}>
        {resumes &&
          resumes.map((resume) => (
            <div>
              <div key={[resume._id]}>
                <div className="top d-flex justify-content-between">
                  <h1>
                    {resume.firstName} {resume.lastName}
                  </h1>
                  <div>
                    <p>
                      <b>Email : </b>
                      {resume.email}
                    </p>
                    <br />
                    <p>
                      <b>Phone Number : </b>
                      {resume.phone}
                    </p>
                  </div>
                </div>
                <br />

                <div className="divider mt-3"></div>

                <div className="objective mt-3">
                  <h3>Objective</h3>
                  <hr />
                  <br></br>
                  <p>{resume.objectiveStatement}</p>
                </div>
                <div className="divider mt-3"></div>
              </div>

              <div className="education1 mt-3" key={[educations._id]}>
                <br></br>
                <h3>Education</h3>
                <hr></hr>
                {educations &&
                  educations.map((education) => (
                    <div className="d-flex align-items-center">
                      <h4 style={{ width: 120 }}>
                        <b>{education.firstGraduateYear} </b>
                      </h4>
                      <br />
                      <p>
                        <b>{education.firstFieldOfStudy}</b>{" "}
                        <i>{education.firstSchoolName} </i>
                      </p>
                      <br />
                      <h4 style={{ width: 120 }}>
                        <b>{education.secGraduateYear} </b>
                      </h4>
                      <br />
                      <p>
                        <b>{education.secFieldOfStudy}</b>{" "}
                        <i>{education.secSchoolName}</i>
                      </p>
                    </div>
                  ))}
              </div>

              <div className="divider mt-3"></div>
              <div className="experience mt-3" key={[projects._id]}>
                <br></br>
                <h3>Work Experience</h3>
                <hr />
                {projects &&
                  projects.map((project) => (
                    <div className="d-flex align-items-center">
                      <h4 style={{ width: 120 }}>
                        <b>{project.firstPastEmployer} </b>
                      </h4>
                      <br />
                      <p>
                        <b>{project.firstPosition}</b>{" "}
                        <b>{project.firstDatesWorked}</b>
                      </p>
                      <br></br>
                      <h4 style={{ width: 120 }}>
                        <b>{project.secPastEmployer} </b>
                      </h4>
                      <br />
                      <p>
                        <b>{project.secPosition}</b>{" "}
                        <b>{project.secDatesWorked}</b>
                      </p>
                    </div>
                  ))}
              </div>

              <br />
            </div>
          ))}
      </div>
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
                sx={{ ml: 3 }}
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
  );
};

export default Template1;
