import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { UPDATE_EDUCATION } from "../../utils/mutations";
import { QUERY_EDUCATIONS, QUERY_ME } from "../../utils/queries";

const EducationQuestions = (props) => {
  const [formState, setFormState] = useState({
    firstSchoolName: "",
    firstGraduateYear: "",
    firstFieldOfStudy: "",
    secSchoolName: "",
    secGraduateYear: "",
    secFieldOfStudy: "",
  });

  const [updateEducation, { error }] = useMutation(UPDATE_EDUCATION);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
    console.log(event.target.name);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    //    console.log(setFormState.position);
    //    console.log(formState.lastName);

    try {
      await updateEducation({
        variables: { ...formState },
      });
    } catch (e) {
      console.error(e);
    }
    window.location.assign("/project");
  };

  return (
    <div>
      <form className="" onSubmit={handleFormSubmit}>
        <h2>Education Details</h2>
        <br></br>
        <hr></hr>
        <br></br>
        <input
          className=""
          placeholder="School 1"
          name="firstSchoolName"
          type="firstSchoolName"
          id="firstSchoolName"
          value={formState.firstSchoolName}
          onChange={handleChange}
        ></input>
        <input
          className=""
          placeholder="Graduation Date"
          name="firstGraduateYear"
          type="firstGraduateYear"
          id="firstGraduateYear"
          value={formState.firstGraduateYear}
          onChange={handleChange}
        ></input>
        <input
          className=""
          placeholder="Degree/Field of Study"
          name="firstFieldOfStudy"
          type="firstFieldOfStudy"
          id="firstFieldOfStudy"
          value={formState.firstFieldOfStudy}
          onChange={handleChange}
        ></input>
        <input
          className=""
          placeholder="School 2"
          name="secSchoolName"
          type="secSchoolName"
          id="secSchoolName"
          value={formState.secSchoolName}
          onChange={handleChange}
        ></input>
        <input
          className=""
          placeholder="Graduation Date"
          name="secGraduateYear"
          type="secGraduateYear"
          id="secGraduateYear"
          value={formState.secGraduateYear}
          onChange={handleChange}
        ></input>
        <input
          className=""
          placeholder="Degree/ Field of Study"
          name="secFieldOfStudy"
          type="secFieldOfStudy"
          id="secFieldOfStudy"
          value={formState.secFieldOfStudy}
          onChange={handleChange}
        ></input>
        <button className="" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default EducationQuestions;
