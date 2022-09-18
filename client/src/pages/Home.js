import React from "react";
import Auth from '../utils/auth'
import ResumeQuestions from "../components/ResumeQuestions";

const Home = () => {


  return (
    <main>
            <div className="">
            <p>Fill out the form!</p>
                <ResumeQuestions />
               
            </div>
    </main>
  );
};

export default Home;
