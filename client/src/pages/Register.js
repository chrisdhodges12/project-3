import React, { useState } from "react";

import { Grid, Box, makeStyles, Typography } from "@material-ui/core";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

import resume1 from "../assets/template1.jpg";
import resume2 from "../assets/template2.jpg";

import Auth from "../utils/auth";

import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  loginPage: {
    display: "flex",
    marginTop: theme.spacing(10),
    justifyContent: "space-between",
    padding: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      width: "fit-content",
      padding: "0",
      margin: "0",
    },
  },
  resumeCont: {
    alignSelf: "stretch",
    height: "100vh",
    marginTop: theme.spacing(5),
    minWidth: "50vw",
    position: "relative",
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      height: "100%",
      minWidth: "10vw",
      display: "none",
    },
  },

  loginCont: {
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing(10),
    marginRight: theme.spacing(5),
    justifyContent: "center",
    height: "50%",
    minWidth: "35vw",
    padding: theme.spacing(5),
    gap: theme.spacing(2),
    background:
      "linear-gradient(180deg, rgba(33, 99, 0, 0.588) 0%, rgba(63, 125, 32, 0.532) 100%)",
    backgroundBlendMode: "darken",
    boxShadow: "1px 5px 5px rgba(0, 0, 0, 0.25)",
    borderRadius: "9px",

    [theme.breakpoints.down("sm")]: {
      height: "100%",
      width: "fit-content",
    },
  },
  resume1: {
    width: "400px",
    position: "absolute",
    marginTop: theme.spacing(3),
    marginRight: theme.spacing(20),
    transform: "rotate(-15.5deg)",
    transformOrigin: "0px 0px",
    [theme.breakpoints.down("sm")]: {
      width: "100px",
      display: "none",
    },
  },
  resume2: {
    width: "400px",
    position: "absolute",
    display: "flex",
    marginLeft: theme.spacing(4),
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "flex-end",
    transform: "rotate(-1.85deg)",
    transformOrigin: "0px 0px",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      width: "100px",
      display: "none",
    },
  },
  signin: {
    fontFamily: "Dosis",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "20px",
  },
  submit: {
    fontFamily: "Dosis",

    color: "rgba(33, 99, 0, 0.888)",
  },
}));

const Register = () => {
  const classes = useStyles();

  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    //use try/catch instead of promises to handle errors
    try {
      //execute addUser mutation and pass in variable data from form
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Grid direction="row" container spacing={3} className={classes.loginPage}>
      <Grid item xs={12} sm={12} md={6} lg={6} className={classes.resumeCont}>
        {/* <Box className={classes.resumeCont}> */}

        <img src={resume1} alt="resume 1" className={classes.resume1} />
        <img src={resume2} alt="resume 1" className={classes.resume2} />
        {/* </Box> */}
      </Grid>
      <form onSubmit={handleFormSubmit}>
        <Grid item xs={12} sm={12} md={6} lg={6} className={classes.loginCont}>
          <input
            className={classes.input}
            placeholder="Your Username"
            style={{
              padding: "10px",
              background: "rgba(255, 255, 255, 0.9)",
              border: "none",
              borderRadius: "9px",
              fontFamily: "Nunito",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              boxSizing: "border-box",
            }}
            name="username"
            type="username"
            id="username"
            value={formState.username}
            onChange={handleChange}
          />

          <input
            className={classes.input}
            placeholder="Your email"
            style={{
              padding: "10px",
              background: "rgba(255, 255, 255, 0.9)",
              border: "none",
              borderRadius: "9px",
              fontFamily: "Nunito",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              boxSizing: "border-box",
            }}
            name="email"
            type="email"
            id="email"
            value={formState.email}
            onChange={handleChange}
          />
          <input
            className=""
            placeholder="******"
            style={{
              padding: "10px",
              background: "rgba(255, 255, 255, 0.9)",
              border: "none",
              borderRadius: "9px",
              fontFamily: "Nunito",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              boxSizing: "border-box",
            }}
            name="password"
            type="password"
            id="password"
            value={formState.password}
            onChange={handleChange}
          />

          <Box
            className={classes.buttons}
            sx={{
              marginTop: "10px",
              gap: "10px",
              width: "100%",
              display: "flex",
              justifyContent: "space-evenly",
              padding: "10px",
            }}
          >
            <NavLink to="/login">
              <button
                type="redirect"
                style={{
                  padding: "12px",
                  minWidth: "13vw",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "9px",
                  border: `2px solid rgba(245, 183, 0, 0.53)`,
                  boxSizing: "border-box",
                  background:
                    "linear-gradient(180deg, rgba(247, 199, 114, 0.89) 0%, rgba(245, 183, 0, 0.53) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
              >
                <Typography variant="h6" className={classes.signin}>
                  Login Instead?
                </Typography>
              </button>
            </NavLink>
            <button
              type="submit"
              style={{
                padding: "12px",
                minWidth: "13vw",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "9px",
                boxSizing: "border-box",
                border: "none",

                background:
                  "linear-gradient(180deg, rgba(247, 199, 114, 0.89) 0%, rgba(245, 183, 0, 0.53) 100%)",
              }}
            >
              <Typography variant="h6" className={classes.submit}>
                Submit
              </Typography>
            </button>
          </Box>

          {error && <div>Login Failed</div>}
        </Grid>
      </form>
    </Grid>
  );
};

export default Register;

{
  /* <main className="">
<div className="">
  <div className="">
    <h4 className="">Sign Up</h4>
    <div className="">
      <form onSubmit={handleFormSubmit}>
        <input
          className=""
          placeholder="Your username"
          name="username"
          type="username"
          id="username"
          value={formState.username}
          onChange={handleChange}
        />
        <input
          className=""
          placeholder="Your email"
          name="email"
          type="email"
          id="email"
          value={formState.email}
          onChange={handleChange}
        />
        <input
          className=""
          placeholder="Password"
          name="password"
          type="password"
          id="password"
          value={formState.password}
          onChange={handleChange}
        />
        <button className="" type="submit">
          Submit
        </button>
      </form>
      {error && <div>Sign up failed</div>}
    </div>
  </div>
</div>
</main> */
}
