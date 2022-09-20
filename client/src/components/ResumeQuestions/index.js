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
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
    console.log(event.target.name)
  };

   const handleFormSubmit = async (event) => {
       event.preventDefault();
       console.log(setFormState.position);
       console.log(formState.lastName);

       try {
          await updateResume({
              variables: { ...formState },
          });

       } catch (e) {
           console.error(e);
       }
           window.location.assign('/profile');
   };

    return (
        <div>
            <form className=''
                onSubmit={handleFormSubmit}
            >

                <input
                    className=""
                    placeholder="First Name"
                    name="firstName"
                    type="name"
                    id="firstName"

                    value={formState.firstName}
                    onChange={handleChange}
                ></input>
                <input
                    className=""
                    placeholder="Last Name"
                    name="lastName"
                    type="name"
                    id="lastName"
                    value={formState.lastName}
                    onChange={handleChange}
                ></input>
                <input
                    className=""
                    placeholder="Email"
                    name="email"
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={handleChange}
                ></input>
                <input
                    className=""
                    placeholder="Phone"
                    name="phone"
                    type="phone"
                    id="phone"
                    value={formState.phone}
                    onChange={handleChange}
                ></input>
                <input
                    className=""
                    placeholder="Objective Statement"
                    name="objectiveStatement"
                    type="objectiveStatement"
                    id="objectiveStatement"
                    value={formState.objectiveStatement}
                    onChange={handleChange}
                ></input>
                <input
                    className=""
                    placeholder="School Name"
                    name="schoolName"
                    type="schoolName"
                    id="schoolName"
                    value={formState.schoolName}
                    onChange={handleChange}
                ></input>
                <input
                    className=""
                    placeholder="Graduation Date"
                    name="graduateYear"
                    type="graduateYear"
                    id="graduateYear"
                    value={formState.graduateYear}
                    onChange={handleChange}
                ></input>
                <input
                    className=""
                    placeholder="Degree/ Field of Study"
                    name="fieldOfStudy"
                    type="fieldOfStudy"
                    id="fieldOfStudy"
                    value={formState.fieldOfStudy}
                    onChange={handleChange}
                ></input>
                <input
                    className=""
                    placeholder="Past Employer"
                    name="pastEmployer"
                    type="pastEmployer"
                    id="pastEmployer"
                    value={formState.pastEmployer}
                    onChange={handleChange}
                ></input>
                <input
                    className=""
                    placeholder="Dates Worked"
                    name="datesWorked"
                    type="datesWorked"
                    id="datesWorked"
                    value={formState.datesWorked}
                    onChange={handleChange}
                ></input>
                <input
                    className=""
                    placeholder="Employee Role"
                    name="position"
                    type="position"
                    id="position"
                    value={formState.position}
                    onChange={handleChange}
                ></input>
                <button className="" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};
export default ResumeQuestions;