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
            <ResumeQuestions />
          </div>
        ) : (
          <NavLink to="/login">
            <button
              type="redirect"
              style={{
                cursor: "pointer",
                  marginTop: "1rem",
                  padding: "10px",
                  minWidth: "13vw",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "9px",
                  border: `2px solid rgba(245, 183, 0, 0.53)`,
                  boxSizing: "border-box",
                  background:
                    "linear-gradient(180deg, rgba(247, 199, 114, 0.89) 0%, rgba(245, 183, 0, 0.53) 100%)",
              }}
            >
              Please Login or Sign Up to Build Your Resume!
            </button>
          </NavLink>
        )}
      </div>
    </main>
  );
};

export default Home;
