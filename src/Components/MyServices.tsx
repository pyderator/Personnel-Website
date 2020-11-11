import React from "react";
import { makeStyles, Theme, Grid } from "@material-ui/core";
import Deployment from "../Assets/Images/deployment.png";
import Scripting from "../Assets/Images/scripting.png";
import Development from "../Assets/Images/web-development.png";
import "react-scroll";
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: "1140px",
    margin: "50px auto",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100% !important",
      width: "100%",
    },
  },
  header_title: {
    fontFamily: "Nunito",
    fontSize: "48px",
    lineHeight: "58px",
    width: "100%",
    textAlign: "center",
    fontWeight: 500,
  },
  item: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "10px",
    maxWidth: 500,
    margin: "auto",
  },
  image_container: {
    width: 70,
    height: 70,
    "& > img": {
      height: "100%",
      width: "100%",
    },
  },
  content_container: {},
  title: {
    fontFamily: "Nunito",
    fontSize: "18px",
    lineHeight: "22px",
    fontWeight: 500,
    textAlign: "center",
    padding: "18px 0",
  },
  text: {
    fontFamily: "Nunito",
    fontSize: "16px",
    lineHeight: "26px",
    fontWeight: 400,
    textAlign: "center",
    color: "rgb(147,147,147)",
  },
}));

const MyServices = () => {
  const classes = useStyles();
  return (
    <div id="services" className={classes.root}>
      <h1 className={classes.header_title} data-aos="fade-up">
        Services
      </h1>
      <Grid container className={classes.root} data-aos="fade-down">
        <Grid item md={4} sm={12} className={classes.item}>
          <div className={classes.image_container}>
            <img src={Development} alt="development" />
          </div>
          <div className={classes.content_container}>
            <h1 className={classes.title}>Development</h1>
            <p className={classes.text}>
              I can develop your website statically[HTML, CSS, JS, React] as
              well as dynamically [MERN | MERNG Stack].
            </p>
          </div>
        </Grid>
        <Grid item md={4} sm={12} className={classes.item}>
          <div className={classes.image_container}>
            <img src={Deployment} alt="deployment" />
          </div>
          <div className={classes.content_container}>
            <h1 className={classes.title}>Deployment</h1>
            <p className={classes.text}>
              I can deploy your website using docker in platforms such as
              digital ocean and can through github (statically).
            </p>
          </div>
        </Grid>
        <Grid item md={4} sm={12} className={classes.item}>
          <div className={classes.image_container}>
            <img src={Scripting} alt="scripting" />
          </div>
          <div className={classes.content_container}>
            <h1 className={classes.title}>Scripting</h1>
            <p className={classes.text}>
              I can write scripts for you in python to automate your task or to
              solve your particular problem and make your life easier.
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default MyServices;
