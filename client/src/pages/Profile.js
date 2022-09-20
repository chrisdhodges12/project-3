import React from 'react';

import { useParams, NavLink } from 'react-router-dom';

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
    <main>
      <div>
      {loggedIn ? (
          <div>
            <p>{user.username}'s Resumes</p>
            <ResumeTemplate resumes={user.resumes} />
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


export default Profile;

