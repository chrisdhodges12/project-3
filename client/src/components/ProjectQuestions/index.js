import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { UPDATE_PROJECT } from "../../utils/mutations";
import { QUERY_PROJECTS, QUERY_ME } from "../../utils/queries";

const ProjectQuestions = (props) => {
  const [formState, setFormState] = useState({
    firstPastEmployer: "",
    firstDatesWorked: "",
    firstPosition: "",
    secPastEmployer: "",
    secDatesWorked: "",
    secPosition: "",
  });

  const [updateProject, { error }] = useMutation(UPDATE_PROJECT);

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
      await updateProject({
        variables: { ...formState },
      });
    } catch (e) {
      console.error(e);
    }
    window.location.assign("/profile");
  };

  return (
    <div>
      <form className="" onSubmit={handleFormSubmit}>
        <h2>Past Employement</h2>
        <br></br>
        <hr></hr>
        <br></br>
        <input
          className=""
          placeholder="Employer 1"
          name="firstPastEmployer"
          type="firstPastEmployer"
          id="firstPastEmployer"
          value={formState.firstPastEmployer}
          onChange={handleChange}
        ></input>
        <input
          className=""
          placeholder="Dates Worked"
          name="firstDatesWorked"
          type="firstDatesWorked"
          id="firstDatesWorked"
          value={formState.firstDatesWorked}
          onChange={handleChange}
        ></input>
        <input
          className=""
          placeholder="Employee Role"
          name="firstPosition"
          type="firstPosition"
          id="firstPosition"
          value={formState.firstPosition}
          onChange={handleChange}
        ></input>

        <input
          className=""
          placeholder="Employer 2"
          name="secPastEmployer"
          type="secPastEmployer"
          id="secPastEmployer"
          value={formState.secPastEmployer}
          onChange={handleChange}
        ></input>
        <input
          className=""
          placeholder="Dates Worked"
          name="secDatesWorked"
          type="secDatesWorked"
          id="secDatesWorked"
          value={formState.secDatesWorked}
          onChange={handleChange}
        ></input>
        <input
          className=""
          placeholder="Employee Role"
          name="secPosition"
          type="secPosition"
          id="secPosition"
          value={formState.secPosition}
          onChange={handleChange}
        ></input>

        <button className="" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default ProjectQuestions;
