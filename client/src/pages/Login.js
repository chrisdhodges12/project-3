import React, { useState } from "react";

import { Grid, Container, Box, makeStyles } from "@material-ui/core";

import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import resume1 from "../assets/template1.jpg";
import resume2 from "../assets/template2.jpg";
import resume3 from "../assets/template3.jpg";

import Auth from "../utils/auth";

const useStyles = makeStyles((theme) => ({
  loginPage: {
    border: "1px solid red",
    display: "flex",
    marginTop: theme.spacing(5),
    justifyContent: "space-between",
    alignSelf: "stretch",
    alignItems: "flex-start",
    padding: theme.spacing(10),
  },
  resumeCont: {
    border: `2px solid rgba(247, 199, 114, 0.89)`,
    alignSelf: "stretch",
    height: "100vh",
    minWidth: "30vw",
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
    border: `2px solid rgba(247, 13, 114, 0.89)`,
    display: "flex",
    flexDirection: "column",
  },
  resume1: {
    width: "400px",
    position: "absolute",
    marginTop: theme.spacing(3),
    marginRight: theme.spacing(20),
    transform: "rotate(-15.5deg)",
    transformOrigin: "0px 0px",
    border: "1px solid red",
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
}));

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });

  const [login, { error }] = useMutation(LOGIN_USER);

  const classes = useStyles();

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

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    // <main className=''>
    //   <div className=''>
    //     <div className=''>
    //       <h4 className=''>Login</h4>
    //       <div className=''>
    //         <form onSubmit={handleFormSubmit}>
    //           <input
    //             className=''
    //             placeholder='Your email'
    //             name='email'
    //             type='email'
    //             id='email'
    //             value={formState.email}
    //             onChange={handleChange}
    //           />
    //           <input
    //             className=''
    //             placeholder='******'
    //             name='password'
    //             type='password'
    //             id='password'
    //             value={formState.password}
    //             onChange={handleChange}
    //           />
    //           <button className='' type='submit'>
    //             Submit
    //           </button>
    //         </form>
    //         {error && <div>Login Failed</div>}
    //       </div>
    //     </div>
    //   </div>
    // </main>
    <Grid direction="row" container spacing={3} className={classes.loginPage}>
      <Grid item xs={12} sm={12} md={6} lg={6} className={classes.resumeCont}>
        {/* <Box className={classes.resumeCont}> */}

        <img src={resume1} alt="resume 1" className={classes.resume1} />
        <img src={resume2} alt="resume 1" className={classes.resume2} />
        {/* </Box> */}
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} className={classes.loginCont}>
        <form className={classes.loginForm}  onSubmit={handleFormSubmit}>
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
            placeholder="******"
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
        {error && <div>Login Failed</div>}
      </Grid>
    </Grid>
  );
};

export default Login;
