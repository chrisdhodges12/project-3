// eslint-disable-next-line no-unused-vars
import React from "react";


const ResumeTemplate = ({ resumes }) => {
    // if (!resumes.length) {
    //     return <h3> No resumes yet. Create one! </h3>;

    return (
        <div>
            <h3> Resumes!! </h3>
            {resumes &&
                resumes.map(resume => (
                    <div key={resume._id}>
                        <p>
                            {resume.firstName} {' '} {resume.lastName}
                        </p>
                        <p>
                            {resume.email}
                        </p>
                        <p>
                            {resume.phone}
                        </p>
                        <p>
                            {resume.objectiveStatement}
                        </p>
                        <p>
                            {resume.schoolName}
                        </p>
                        <p>
                            {resume.graduateYear}
                        </p>
                        <p>
                            {resume.fieldOfStudy}
                        </p>
                        <p>
                            {resume.pastEmployer}
                        </p>
                        <p>
                            {resume.datesWorked}
                        </p>
                        <p>
                            {resume.position}
                        </p>
                    </div>
            ))}
        </div>
    )
}

export default ResumeTemplate;