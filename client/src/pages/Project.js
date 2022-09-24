import React from "react";
import ProjectQuestions from "../components/ProjectQuestions";
import Auth from "../utils/auth";
import { NavLink } from "react-router-dom";

const Project = () => {
  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="">
        {loggedIn ? (
          <div>
            <ProjectQuestions />
          </div>
        ) : (
          <NavLink to="/login">
            <button type="redirect">
              Please Login or Sign Up to Build Your Resume!
            </button>
          </NavLink>
        )}
      </div>
    </main>
  );
};

export default Project;
