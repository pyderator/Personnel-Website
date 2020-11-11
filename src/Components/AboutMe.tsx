import React from "react";
import myImage from "../Assets/Images/pyderator.png";
import { Button, makeStyles, Theme } from "@material-ui/core";
import { scroller } from "react-scroll";
import Skills from "./Skills";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100%",
    maxWidth: "1140px",
    margin: "50px auto 0 auto",
    display: "flex",
    overflow: "hidden",
    // marginTop: "40px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      height: "100%",
    },
  },
  image_container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "500px",
  },
  image: {
    padding: "10px",
    maxWidth: "100%",
    // maxHeight: "600px",
  },
  about_me: {
    padding: "0 10px",
  },
  about_container: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    maxWidth: 705,
    margin: "auto",
  },
  info_container: {
    // paddingLeft: "10px",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "Nunito",
    fontSize: "48px",
    lineHeight: "58px",
    fontWeight: 500,
    "&::selection": {
      backgroundColor: "#000",
      color: "#FFF",
    },
  },
  text: {
    marginTop: "0.625rem",
    fontFamily: "Nunito",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "26px",
    color: "rgb(147, 147, 147)",
  },
  skills_container: {
    width: "100%",
  },
  button_container: {
    margin: "10px 0",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    "& > button": {
      minHeight: "50px",
      minWidth: "170px",
      fontFamily: "Nunito",
      fontSize: "16px",
    },
  },
}));

const AboutMe = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} id="about">
      <div className={classes.image_container} data-aos="fade-right">
        {/* Image */}
        <img className={classes.image} src={myImage} alt="" />
      </div>
      <div className={classes.about_container} data-aos="fade-left">
        <div className={classes.info_container}>
          {/* About me */}
          <div className={classes.about_me}>
            <h1 className={classes.title}>About Me</h1>
            <p className={classes.text}>
              I am a Full Stack Developer from Nepal. I am currently studying `
              Ethical Hacking And CyberSecurity ` in Coventry University. I
              basically do things in MERNG Stack and being a CyberSecurity
              Student, I focus more on valid Authorization and Authentication.
            </p>
            <p className={classes.text}>
              I also do love designing things, cloning the existing one. I just
              love solving problems with the technology that I know. Being an
              Ethical Hacking Student, I do also have knowldege about
              Networking, Hacking, Forensics etc although I have still a lot to
              learn.
            </p>
          </div>
          <div className={classes.skills_container}>
            <Skills />
            <div className={classes.button_container}>
              <Button
                variant="contained"
                color="primary"
                onClick={() =>
                  scroller.scrollTo("contact", {
                    duration: 1500,
                    delay: 200,
                    smooth: true,
                  })
                }
              >
                Hire Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
