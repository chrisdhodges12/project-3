import React from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  makeStyles,
} from "@material-ui/core";
import { Image } from "mui-image";
import templateimg from "../resources/template1.png";
import template2img from "../resources/template2.png";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  resPage: {
    display: "flex",
    justifyContent: "center",
  },
  resHeader: {
    display: "flex",
    justifyContent: "center",
  },
  resText: {
    fontFamily: "Dosis",
    fontSize: "4rem",
    fontWeight: "500",
    color: theme.palette.common.white,
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
  resumeCont: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  resumeBox: {
    width: "fit-content",
    padding: theme.spacing(4),
    borderRadius: ".7rem",
    background:
      "linear-gradient(180deg, rgba(33, 99, 0, 0.488) 0%, rgba(63, 125, 32, 0.432) 100%)",
    boxShadow: theme.shadows[6],
  },
  resumeImg: {
    maxWidth: "40vw",
    maxHeight: "100%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "80vw",
    },
  },
  buttonCont: {
    display: "flex",
    marginTop: theme.spacing(2),
    width: "68%",
    justifyContent: "flex-end",
  },
  view: {
    fontFamily: "Dosis",
    fontSize: "1.5rem",
    color: "rgba(33, 99, 0, 0.888)",
  },
}));
function TemplateDesign() {
  const navigate = useNavigate();
  const templates = [
    {
      title: "Simple Resume",
      image: templateimg,
    },
    {
      title: "Highlighted Sections Resume",
      image: template2img,
    },
  ];
  const classes = useStyles();

  return (
    <Grid container direction="column" spacing={3} className={classes.resPage}>
      <Grid item xs={12} className={classes.resHeader}>
        <Typography variant="h4" className={classes.resText}>
          Choose a template
        </Typography>
      </Grid>
      {templates.map((template, index) => {
        return (
          <Grid item xs={12}>
            <Container maxWidth="lg" className={classes.resumeCont}>
              <Box className={classes.resumeBox}>
                <Image
                  className={classes.resumeImg}
                  src={template.image}
                  // height="400"
                  alt=""
                  // style={{ width: "100%" }}
                />
              </Box>
            </Container>
            <Box className={classes.buttonCont}>
              <button
                onClick={() => navigate(`/templates/${index + 1}`)}
                style={{
                  cursor: "pointer",
                  marginTop: "1rem",
                  padding: "10px",
                  minWidth: "13vw",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "9px",
                  border: `2px solid rgba(245, 183, 0, 0.53)`,
                  boxSizing: "border-box",
                  background:
                    "linear-gradient(180deg, rgba(247, 199, 114, 0.89) 0%, rgba(245, 183, 0, 0.53) 100%)",
                }}
              >
                <Typography className={classes.view}>TRY</Typography>
              </button>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default TemplateDesign;
