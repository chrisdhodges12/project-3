import React from "react";
// import Auth from '../utils/auth'
import ResumeQuestions from "../components/ResumeQuestions";
import { useQuery } from "@apollo/client";
import { QUERY_ME, QUERY_RESUMES } from "../utils/queries";
import Auth from "../utils/auth";
import { NavLink } from "react-router-dom";

const Home = () => {
  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="">
        {loggedIn ? (
          <div>
            <p>Fill out the form!</p>
            <ResumeQuestions />
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

export default Home;
