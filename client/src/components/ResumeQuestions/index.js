import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { UPDATE_RESUME } from "../../utils/mutations";
import { QUERY_RESUMES, QUERY_ME } from "../../utils/queries";
import { makeStyles, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  resHeader: {
    display: "flex",
    justifyContent: "center",
  },
  resHeaderText: {
    fontFamily: "Dosis",
    fontWeight: "500",
    color: theme.palette.common.white,
    // background: 'linear-gradient(180deg, rgba(247, 199, 114, 0.89) 0%, rgba(245, 183, 0, 0.53) 100%)',
    // WebkitBackgroundClip: 'text',
    // WebkitTextFillColor: 'transparent',
    // backgroundClip: 'text',
    // textFillColor: 'transparent',
  },
  formBox: {
    display: "flex",
    background:
      "linear-gradient(180deg, rgba(33, 99, 0, 0.588) 0%, rgba(63, 125, 32, 0.532) 100%)",
    backgroundBlendMode: "darken",
    boxShadow: "1px 5px 5px rgba(0, 0, 0, 0.25)",
    width: '90vw',
    height: "fit-content",
    borderRadius: "9px",
    justifyContent: "center",
  },
  form: {
    marginTop: "2rem",
    marginBottom: "2rem",
    padding: theme.spacing(2),
  },
  formGrid: {},
  input: {
    padding: theme.spacing(2),
    background: "rgba(255, 255, 255, 0.9)",
    border: "none",
    borderRadius: "9px",
    fontFamily: "Nunito",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    boxSizing: "border-box",
    width: "100%",
  },
  buttonGrid: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    padding: "12px",
    width: "100%",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "9px",
    boxSizing: "border-box",
    border: "none",
cursor: 'pointer',
    background:
      "linear-gradient(180deg, rgba(247, 199, 114, 0.89) 0%, rgba(245, 183, 0, 0.53) 100%)",
  },
}));

const ResumeQuestions = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    objectiveStatement: "",
    schoolName: "",
    graduateYear: "",
    fieldOfStudy: "",
    pastEmployer: "",
    datesWorked: "",
    position: "",
  });

  const [updateResume, { error }] = useMutation(UPDATE_RESUME);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
    console.log(event.target.name);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(setFormState.position);
    console.log(formState.lastName);

    try {
      await updateResume({
        variables: { ...formState },
      });
    } catch (e) {
      console.error(e);
    }
    window.location.assign("/education");
  };
  const classes = useStyles();
  return (
    <Grid container direction="column" spacing={5} className={classes.mainBox}>
      <Grid item xs={12} className={classes.resHeader}>
        <Typography variant="h3" className={classes.resHeaderText}>
          Personal Details
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container className={classes.formBox}>
          <form className={classes.form} onSubmit={handleFormSubmit}>
            <Grid
              container
              direction="row"
              spacing={4}
              className={classes.formGrid}
              // alignItems="center"
            >
              <Grid item xs={12} md={6} lg={4}>
                <input
                  className={classes.input}
                  placeholder="First Name"
                  name="firstName"
                  type="name"
                  id="firstName"
                  value={formState.firstName}
                  onChange={handleChange}
                ></input>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <input
                  className={classes.input}
                  placeholder="Last Name"
                  name="lastName"
                  type="name"
                  id="lastName"
                  value={formState.lastName}
                  onChange={handleChange}
                ></input>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <input
                  className={classes.input}
                  placeholder="Email"
                  name="email"
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={handleChange}
                ></input>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <input
                  className={classes.input}
                  placeholder="Phone"
                  name="phone"
                  type="phone"
                  id="phone"
                  value={formState.phone}
                  onChange={handleChange}
                ></input>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <input
                  className={classes.input}
                  placeholder="Objective Statement"
                  name="objectiveStatement"
                  type="objectiveStatement"
                  id="objectiveStatement"
                  value={formState.objectiveStatement}
                  onChange={handleChange}
                ></input>
              </Grid>
              <Grid item xs={12} md={6} lg={4} className={classes.buttonGrid}>
                <button type="submit" className={classes.button}>
                  Submit
                </button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default ResumeQuestions;

{
  /* <div>
<form className="" onSubmit={handleFormSubmit}>
  <h2>Personal Details</h2>
  <br></br>
  <hr></hr>
  <br></br>
  <input
    className=""
    placeholder="First Name"
    name="firstName"
    type="name"
    id="firstName"
    value={formState.firstName}
    onChange={handleChange}
  ></input>
  <input
    className=""
    placeholder="Last Name"
    name="lastName"
    type="name"
    id="lastName"
    value={formState.lastName}
    onChange={handleChange}
  ></input>
  <input
    className=""
    placeholder="Email"
    name="email"
    type="email"
    id="email"
    value={formState.email}
    onChange={handleChange}
  ></input>
  <input
    className=""
    placeholder="Phone"
    name="phone"
    type="phone"
    id="phone"
    value={formState.phone}
    onChange={handleChange}
  ></input>
  <input
    className=""
    placeholder="Objective Statement"
    name="objectiveStatement"
    type="objectiveStatement"
    id="objectiveStatement"
    value={formState.objectiveStatement}
    onChange={handleChange}
  ></input>

  <button className="" type="submit">
    Next
  </button>
</form>
</div> */
}
