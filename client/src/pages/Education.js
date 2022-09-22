import React from "react";
// import Auth from '../utils/auth'
import EducationQuestions from "../components/EducationQuestions";
import { useQuery } from "@apollo/client";
import { QUERY_ME, QUERY_RESUMES } from "../utils/queries";
import Auth from "../utils/auth";
import { NavLink } from "react-router-dom";

const Education = () => {
  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="">
        {loggedIn ? (
          <div>
            <EducationQuestions />
          </div>
        ) : (
          <NavLink to="/login">
            <button type="redirect">Please Login or Sign Up to Build Your Resume!</button>
          </NavLink>
        )}
      </div>
    </main>
  );
};

export default Education;