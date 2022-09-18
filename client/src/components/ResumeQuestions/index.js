import React, { useState } from "react";

import { useMutation } from '@apollo/client';
import { UPDATE_RESUME  } from '../../utils/mutations';
import { QUERY_RESUMES, QUERY_ME } from '../../utils/queries';
import { setContext } from "@apollo/client/link/context";


const ResumeQuestions = () => {
   const [inputValues, setInputValues] = useState({
       firstName: '',
       lastName: '',
       email: '',
       phone: '',
       objectiveStatement: '',
       schoolName: '',
       graduationDate: '',
       fieldOfStudy: '',
       pastEmployer: '',
       datesWorked: '',
       position: ''
   });

   const [updateResume, { error }] = useMutation(UPDATE_RESUME)

   const handleChange = event => {
    //    const { name, value } = event.target;
       setInputValues(event.target.value);
   };

   const handleFormSubmit = async event => {
       event.preventDefault();

       try {
           await updateResume({
               variables: { inputValues }
           });

           window.location.assign('/profile');
       } catch (e) {
           console.error(e);
       }
   }

    return (
        <div>
            <form className=''
                onSubmit={handleFormSubmit}
            >

                <textarea
                    placeholder="First Name"
                    value={inputValues.firstName}
                    className=''
                    onChange={handleChange}
                ></textarea>
                <textarea
                    placeholder="Last Name"
                    value={inputValues.lastName}
                    className=''
                    onChange={handleChange}
                ></textarea>
                <textarea
                    placeholder="Email"
                    value={inputValues.email}
                    className=''
                    onChange={handleChange}
                ></textarea>
                <textarea
                    placeholder="Phone"
                    value={inputValues.phone}
                    className=''
                    onChange={handleChange}
                ></textarea>
                <textarea
                    placeholder="Objective Statement"
                    value={inputValues.objectiveStatement}
                    className=''
                    onChange={handleChange}
                ></textarea>
                <textarea
                    placeholder="School Name"
                    value={inputValues.schoolName}
                    className=''
                    onChange={handleChange}
                ></textarea>
                <textarea
                    placeholder="Graduation Date"
                    value={inputValues.graduateYear}
                    className=''
                    onChange={handleChange}
                ></textarea>
                <textarea
                    placeholder="Degree/ Field of Study"
                    value={inputValues.fieldOfStudy}
                    className=''
                    onChange={handleChange}
                ></textarea>
                <textarea
                    placeholder="Past Employer"
                    value={inputValues.pastEmployer}
                    className=''
                    onChange={handleChange}
                ></textarea>
                <textarea
                    placeholder="Dates Worked"
                    value={inputValues.datesWorked}
                    className=''
                    onChange={handleChange}
                ></textarea>
                <textarea
                    placeholder="Employee Role"
                    value={inputValues.position}
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