import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { UPDATE_RESUME } from "../../utils/mutations";

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
    position: "",
    skills: "",
  });

  const [updateResume, { error }] = useMutation(UPDATE_RESUME);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
    console.log(event.target.name);
  };

//   const addMoreSkills = (event) => {
//     event.preventDefault();

//     try {
//          updateResume({
//           variables: { ...formState },
//         });
//       } catch (e) {
//         console.error(e);
//       }


//     setFormState({
//         skills: ""
//     })
//   };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await updateResume({
        variables: { ...formState },
      });
    } catch (e) {
      console.error(e);
    }
    window.location.assign("/profile");
  };

  return (
    <div>
      {error && <span className=''>Something went wrong...</span>}
      <form className="" onSubmit={handleFormSubmit}>
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
        <input
          className=""
          placeholder="Skills"
          name="skills"
          type="skills"
          id="skills"
          value={formState.skills}
          onChange={handleChange}
        ></input>
        {/* <button onClick={addMoreSkills}>Add more skills</button> */}
        <button className="" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default ResumeQuestions;
