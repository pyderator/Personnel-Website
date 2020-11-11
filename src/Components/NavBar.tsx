import React, { useContext, useState } from "react";
import {
  SwipeableDrawer,
  IconButton,
  makeStyles,
  Theme,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { Menu, ChevronLeft, ChevronRight } from "@material-ui/icons";
import { AOSContext } from "../Contexts/AOSContext";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: "transparent",
    overflow: "hidden",
    position: "fixed",
    top: "0",
    zIndex: 1000,
    height: "50px",
    width: "100vw",
    maxWidth: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-between",
      maxWidth: "100vw",
      overflow: "hidden",
    },
  },
  logo_container: {
    padding: "0 20px",
  },
  logo_link: {
    fontFamily: "Nunito",
    fontSize: 24,
    fontWeight: 700,
    color: "#000",
    textDecoration: "none",
    border: "2px solid white",
    padding: "5px",
  },
  link_container: {
    flex: 1,
    maxWidth: 500,
    display: "flex",
    justifyContent: "space-between",
  },
  link: {
    fontFamily: "Nunito",
    fontSize: "14px",
    lineHeight: "22px",
    fontWeight: 400,
    color: "rgba(0,0,0,0.8)",
    cursor: "pointer",
    textDecoration: "none",
    "&:hover": {
      color: "rgba(0,0,0,1)",
    },
  },
  active: {
    opacity: 1,
    color: "#FF5757",
  },
  icon_button: {
    padding: "15px 20px",
  },
  mobile: {
    display: "flex",
    padding: "0 100px",
    flexDirection: "column",
    "& > a": {
      padding: "10px",
    },
  },
  backbutton_container: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    "& > button": {
      margin: "0 20px",
    },
  },
}));

const NavBar: React.FC<{}> = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const mediaQuery = useMediaQuery(theme.breakpoints.down("sm"));
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 20) {
      if (document.getElementById("navbar")) {
        document.getElementById("navbar")!.style.backgroundColor = "#FFF";
        document.getElementById("logo")!.style.border = "1px solid black";
      }
    } else if (document.getElementById("navbar")) {
      document.getElementById("navbar")!.style.backgroundColor = "transparent";
      document.getElementById("navbar")!.style.color = "black";
      document.getElementById("logo")!.style.border = "1px solid white";
    }
  });
  useContext(AOSContext);
  return (
    <nav className={classes.root} id="navbar">
      <SwipeableDrawer
        // className={classes.drawer}
        variant="temporary"
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        classes={
          {
            // paper: classes.drawerPaper,
          }
        }
      >
        <div>
          <div className={classes.backbutton_container}>
            <IconButton onClick={() => setOpen(false)}>
              {theme.direction === "ltr" ? <ChevronLeft /> : <ChevronRight />}
            </IconButton>
          </div>
          <div
            className={`${classes.link_container} ${classes.mobile}`}
            data-aos="fade-left"
          >
            <Link
              to="home"
              className={classes.link}
              activeClass={classes.active}
              spy={true}
              smooth={true}
              offset={-50}
              duration={200}
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              to="about"
              className={classes.link}
              activeClass={classes.active}
              spy={true}
              smooth={true}
              offset={-50}
              duration={200}
              onClick={() => setOpen(false)}
            >
              About
            </Link>
            {/* <Link
              to="#portfolio"
              className={classes.link}
              activeClass={classes.active}
              spy={true}
              smooth={true}
              // offset={50}
              duration={1000}
              onClick={() => setOpen(false)}
            >
              Portfolio
            </Link> */}
            <Link
              to="services"
              className={classes.link}
              activeClass={classes.active}
              spy={true}
              smooth={true}
              offset={-50}
              duration={200}
              onClick={() => setOpen(false)}
            >
              Services
            </Link>
            <Link
              to="blog"
              className={classes.link}
              activeClass={classes.active}
              spy={true}
              smooth={true}
              offset={-50}
              duration={200}
              onClick={() => setOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="contact"
              className={classes.link}
              activeClass={classes.active}
              spy={true}
              smooth={true}
              offset={-50}
              duration={200}
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </SwipeableDrawer>
      <div className={classes.logo_container} data-aos="fade-right">
        <Link to="/" className={classes.logo_link} id="logo">
          Pyderator
        </Link>
      </div>
      {!mediaQuery ? (
        <div className={classes.link_container} data-aos="fade-left">
          <Link
            to="home"
            className={classes.link}
            activeClass={classes.active}
            spy={true}
            smooth={true}
            offset={-50}
            duration={200}
          >
            Home
          </Link>
          <Link
            to="about"
            className={classes.link}
            activeClass={classes.active}
            spy={true}
            smooth={true}
            offset={-50}
            duration={200}
          >
            About
          </Link>
          {/* <Link
            to="#portfolio"
            className={classes.link}
            activeClass={classes.active}
            spy={true}
            smooth={true}
            // offset={50}
            duration={1000}
          >
            Portfolio
          </Link> */}
          <Link
            to="services"
            className={classes.link}
            activeClass={classes.active}
            spy={true}
            smooth={true}
            offset={-50}
            duration={200}
          >
            Services
          </Link>
          <Link
            to="blog"
            className={classes.link}
            activeClass={classes.active}
            spy={true}
            smooth={true}
            offset={-50}
            duration={200}
          >
            Blog
          </Link>
          <Link
            to="contact"
            className={classes.link}
            activeClass={classes.active}
            spy={true}
            smooth={true}
            offset={-50}
            duration={200}
          >
            Contact
          </Link>
        </div>
      ) : (
        <IconButton
          aria-label="menu-icon"
          className={classes.icon_button}
          onClick={() => setOpen(true)}
        >
          <Menu fontSize="large" color="inherit" />
        </IconButton>
      )}
    </nav>
  );
};

export default NavBar;
