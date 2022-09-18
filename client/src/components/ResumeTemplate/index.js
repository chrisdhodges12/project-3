// eslint-disable-next-line no-unused-vars
import React from "react";





const ResumeTemplate = ({ savedResumes }) => {
    // if (!savedResumes.length) {
    //     return <h3> No resumes yet. Create one! </h3>;
    // }
    return (
        <div>
            <h3> Resumes!! </h3>
            {savedResumes.map(resume => (
                <div key={resume._id} >
                   <p>{resume.firstName} </p> 
                </div>
            ))}
        </div>
    )
}

export default ResumeTemplate;