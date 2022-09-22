import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formBox: {
    display: "flex",
    background:
      "linear-gradient(180deg, rgba(33, 99, 0, 0.588) 0%, rgba(63, 125, 32, 0.532) 100%)",
    backgroundBlendMode: "darken",
    boxShadow: "1px 5px 5px rgba(0, 0, 0, 0.25)",
    height: "fit-content",
    borderRadius: "9px",
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
    width: "75%",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "9px",
    boxSizing: "border-box",
    border: "none",

    background:
      "linear-gradient(180deg, rgba(247, 199, 114, 0.89) 0%, rgba(245, 183, 0, 0.53) 100%)",
  },
}));

function FormBox(props) {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.formBox}>
      <form className={classes.form}>
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
              value={props.formState.firstName}
            ></input>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <input
              className={classes.input}
              placeholder="Last Name"
              name="lastName"
              type="name"
              id="lastName"
            ></input>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <input
              className={classes.input}
              placeholder="Email"
              name="email"
              type="email"
              id="email"
            ></input>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <input
              className={classes.input}
              placeholder="Phone"
              name="phone"
              type="phone"
              id="phone"
            ></input>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <input
              className={classes.input}
              placeholder="Objective Statement"
              name="objectiveStatement"
              type="objectiveStatement"
              id="objectiveStatement"
            ></input>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <input
              className={classes.input}
              placeholder="School Name"
              name="schoolName"
              type="schoolName"
              id="schoolName"
            ></input>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <input
              className={classes.input}
              placeholder="Graduation Date"
              name="graduateYear"
              type="graduateYear"
              id="graduateYear"
            ></input>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <input
              className={classes.input}
              placeholder="Degree/ Field of Study"
              name="fieldOfStudy"
              type="fieldOfStudy"
              id="fieldOfStudy"
            ></input>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <input
              className={classes.input}
              placeholder="Past Employer"
              name="pastEmployer"
              type="pastEmployer"
              id="pastEmployer"
            ></input>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <input
              className={classes.input}
              placeholder="Dates Worked"
              name="datesWorked"
              type="datesWorked"
              id="datesWorked"
            ></input>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <input
              className={classes.input}
              placeholder="Employee Role"
              name="position"
              type="position"
              id="position"
            ></input>
          </Grid>
          <Grid item xs={12} md={6} lg={4} className={classes.buttonGrid}>
            <button className={classes.button}>Submit</button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default FormBox;
