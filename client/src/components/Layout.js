// import Nav from "./Nav";
// import Footer from "./Footer";
import { Grid, makeStyles } from "@material-ui/core";
import Header from "./Header";

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2),
  },
    footer: {
        display: "flex",
        justifyContent: "center",
    }
}));

function Layout({ children }) {
  const classes = useStyles();

  return (
    <Grid container direction="row">
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <div className={classes.main}>{children}</div>
      </Grid>
      <Grid item xs={12}>
        {/* <div className={classes.footer}> */}
          {/* <Footer /> */}
        {/* </div> */}
      </Grid>
    </Grid>
  );
}

export default Layout;