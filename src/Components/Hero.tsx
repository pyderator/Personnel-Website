import { Fab, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import HeroImg from "../Assets/Images/coffee-hero-img.jpg";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { scroller } from "react-scroll";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "relative",
    backgroundImage: `url(${HeroImg}), linear-gradient(to right, #6DB3F2, #6DB3F2)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    // backgroundAttachment: "fixed",
    height: "100vh",
    width: "100vw",
    maxWidth: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    //     -moz-transform: 'translateX(0px)',
    // -webkit-transform: 'translateX(0px)',
    // -o-transform: 'translateX(0px)',
    // -ms-transform: 'translateX(0px)',
    backgroundColor: "#000",
    transform: "translateX(0px)",
  },
  content_container: {
    height: "85%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      height: "80%",
      width: "100%",
      overflow: "hidden",
    },
  },
  title1: {
    fontFamily: "Nunito",
    lineHeight: "60px",
    fontSize: "60px",
    color: "#FFF",
    fontWeight: 900,
    textAlign: "center",
    "&::selection": {
      background: "#000000",
      color: "#ffffff",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
      lineHeight: "40px",
    },
  },
  bgBlack: {
    marginBottom: "10px",
    lineHeight: "90px",
    fontSize: 70,
    backgroundColor: "#000",
    [theme.breakpoints.down("sm")]: {
      fontSize: "35px",
      lineHeight: "45px",
    },
  },
  title_merng: {
    color: "#f50057",
  },
}));
const Hero = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} id="home">
      {/* <NavBar /> */}
      <div className={classes.content_container}>
        <h1
          className={`${classes.title1} ${classes.bgBlack}`}
          data-aos="fade-left"
        >
          I'm Gaurav Jha
        </h1>
        <br />
        <h1 className={classes.title1} data-aos="fade-right">
          <span className={classes.title_merng}>MERNG</span> Stack Developer
        </h1>
      </div>
      <Fab
        id="ctabutton"
        color="secondary"
        data-aos="fade-left"
        onClick={() =>
          scroller.scrollTo("about", {
            duration: 100,
            delay: 200,
            smooth: true,
          })
        }
      >
        <ExpandMoreIcon />
      </Fab>
    </div>
  );
};

export default Hero;
