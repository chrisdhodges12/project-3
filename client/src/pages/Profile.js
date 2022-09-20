import React from 'react';

import { useParams } from 'react-router-dom';

import ResumeTemplate from '../components/ResumeTemplate';

import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';


const Profile = () => {

  const loggedIn = Auth.loggedIn();

  const { username: userParam } = useParams();

  const { loading, data } = useQuery(QUERY_ME, {
    variables: { username: userParam }
  });

  const user = data?.me || {};


  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="">
        <h2 className="">
        {user.username}'s Resumes
        </h2>
      </div>

      <div className="flex-row justify-space-between mb-3">
        <div className="col-12 mb-3 col-lg-8">

          <ResumeTemplate resumes={user.resumes} />
        </div>

      </div>
    </div>
  );
};

export default Profile;

