import React from "react";

import Auth from '../utils/auth'
import { useParams, Navigate  } from 'react-router-dom'

import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';


import ResumeQuestions from "../components/ResumeQuestions";
import ResumeTemplate from "../components/ResumeTemplate";

const Home = () => {

    const { username : userParam } = useParams();

    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam }
    });

    const user = data?.me  || {};

  return (
    <main>
      <div className="">
            <ResumeQuestions />
            <p>RESUME QUESTIONS SECTION</p>

      </div>
    </main>
  );
};

export default Home;
