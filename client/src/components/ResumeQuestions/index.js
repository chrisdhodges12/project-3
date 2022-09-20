import React, { useState } from "react";

import { useMutation } from '@apollo/client';
import { UPDATE_RESUME  } from '../../utils/mutations';
import { QUERY_RESUMES, QUERY_ME } from '../../utils/queries';


const ResumeQuestions = (props) => {
   const [formState, setFormState] = useState({
       firstName: "",
       lastName: "",
       email: "",
       phone: "",
       objectiveStatement: "",
       schoolName: "",
       graduateYear: "",
       fieldOfStudy: "",
       pastEmployer: "",
       datesWorked: "",
       position: ""
   });

   const [updateResume, { error }] = useMutation(UPDATE_RESUME)


   const handleChange = (event) => {
       setFormState(event.target.value)
   };

   const handleFormSubmit = async (event) => {
       event.preventDefault();
       console.log(setFormState.position);
       console.log(formState.lastName);

       try {
          await updateResume({
              variables: { ...formState },
          });

          
        //    window.location.assign('/profile');
       } catch (e) {
           console.error(e);
       }
       setFormState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        objectiveStatement: "",
        schoolName: "",
        graduateYear: "",
        fieldOfStudy: "",
        pastEmployer: "",
        datesWorked: "",
        position: ""
       });
   };

    return (
        <div>
            <form className=''
                onSubmit={handleFormSubmit}
            >

                <textarea
                    placeholder="First Name"
                    value={formState.firstName}
                    className=''
                    onChange={handleChange}
                ></textarea>
                <textarea
                    placeholder="Last Name"
                    value={formState.lastName}
                    className=''
                    onChange={handleChange}
                ></textarea>
                <textarea
                    placeholder="Email"
                    value={formState.email}
                    className=''
                    onChange={handleChange}
                ></textarea>
                <textarea
                    placeholder="Phone"
                    value={formState.phone}
                    className=''
                    onChange={handleChange}
                ></textarea>
                <textarea
                    placeholder="Objective Statement"
                    value={formState.objectiveStatement}
                    className=''
                    onChange={handleChange}
                ></textarea>
                <textarea
                    placeholder="School Name"
                    value={formState.schoolName}
                    className=''
                    onChange={handleChange}
                ></textarea>
                <textarea
                    placeholder="Graduation Date"
                    value={formState.graduateYear}
                    className=''
                    onChange={handleChange}
                ></textarea>
                <textarea
                    placeholder="Degree/ Field of Study"
                    value={formState.fieldOfStudy}
                    className=''
                    onChange={handleChange}
                ></textarea>
                <textarea
                    placeholder="Past Employer"
                    value={formState.pastEmployer}
                    className=''
                    onChange={handleChange}
                ></textarea>
                <textarea
                    placeholder="Dates Worked"
                    value={formState.datesWorked}
                    className=''
                    onChange={handleChange}
                ></textarea>
                <textarea
                    placeholder="Employee Role"
                    value={formState.position}
                    className=''
                    onChange={handleChange}
                ></textarea>
                <button className="" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};
export default ResumeQuestions;