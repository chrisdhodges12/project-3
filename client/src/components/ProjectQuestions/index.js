import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { UPDATE_PROJECT } from "../../utils/mutations";
import { QUERY_PROJECTS, QUERY_ME } from "../../utils/queries";

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
  // buttonGrid: {
  //   display: "flex",
  //   justifyContent: "flex-end",
  // },
  button: {
    padding: "12px",
    width: "100%",
    marginTop: theme.spacing(3),
    height: "7vh",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "9px",
    boxSizing: "border-box",
    border: "none",

    background:
      "linear-gradient(180deg, rgba(247, 199, 114, 0.89) 0%, rgba(245, 183, 0, 0.53) 100%)",
  },
  [theme.breakpoints.down("sm")]: {
    height: "fit-content",
  },
}));

const ProjectQuestions = (props) => {
  const [formState, setFormState] = useState({
    firstPastEmployer: "",
    firstDatesWorked: "",
    firstPosition: "",
    secPastEmployer: "",
    secDatesWorked: "",
    secPosition: "",
  });

  const [updateProject, { error }] = useMutation(UPDATE_PROJECT);

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
    //    console.log(setFormState.position);
    //    console.log(formState.lastName);

    try {
      await updateProject({
        variables: { ...formState },
      });
    } catch (e) {
      console.error(e);
    }
    window.location.assign("/design");
  };
  const classes = useStyles();
  return (
    <Grid container direction="column" spacing={5} className={classes.mainBox}>
      <Grid item xs={12} className={classes.resHeader}>
        <Typography variant="h3" className={classes.resHeaderText}>
          Past Employment
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
                  placeholder="Employer 1"
                  name="firstPastEmployer"
                  type="firstPastEmployer"
                  id="firstPastEmployer"
                  value={formState.firstPastEmployer}
                  onChange={handleChange}
                ></input>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <input
                  className={classes.input}
                  placeholder="Dates Worked"
                  name="firstDatesWorked"
                  type="firstDatesWorked"
                  id="firstDatesWorked"
                  value={formState.firstDatesWorked}
                  onChange={handleChange}
                ></input>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <input
                  className={classes.input}
                  placeholder="Employee Role"
                  name="firstPosition"
                  type="firstPosition"
                  id="firstPosition"
                  value={formState.firstPosition}
                  onChange={handleChange}
                ></input>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <input
                  className={classes.input}
                  placeholder="Employer 2"
                  name="secPastEmployer"
                  type="secPastEmployer"
                  id="secPastEmployer"
                  value={formState.secPastEmployer}
                  onChange={handleChange}
                ></input>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <input
                  className={classes.input}
                  placeholder="Dates Worked"
                  name="secDatesWorked"
                  type="secDatesWorked"
                  id="secDatesWorked"
                  value={formState.secDatesWorked}
                  onChange={handleChange}
                ></input>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <input
                  className={classes.input}
                  placeholder="Employee Role"
                  name="secPosition"
                  type="secPosition"
                  id="secPosition"
                  value={formState.secPosition}
                  onChange={handleChange}
                ></input>
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
export default ProjectQuestions;
