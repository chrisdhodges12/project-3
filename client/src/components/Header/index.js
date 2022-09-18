import React from 'react';

import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {

  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="">
      <div className="">
        <Link to="/">
          <h1>Resume Builder</h1>
        </Link>

        <nav className="text-center">
          {Auth.loggedIn() ? (
            <>
            <Link to="/">Home</Link> <br></br>
              <Link to="/profile">My Resumes</Link> <br>
              </br>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              
              <Link to="/login">Login</Link> <br></br>
              <Link to="/register">Signup</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
