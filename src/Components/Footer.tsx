import React from "react";
import {
  CopyrightOutlined,
  GitHub,
  Instagram,
  LinkedIn,
  Telegram,
  Twitter,
} from "@material-ui/icons";
import { IconButton, makeStyles, Theme } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: "30px 0 0 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  cr: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Nunito",
    fontWeight: 500,
    fontSize: 17,
    lineHeight: "20px",
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <p className={classes.cr}>
        <CopyrightOutlined />
        Gaurav Jha | All Rights Reserved.
      </p>
      <div>
        <IconButton aria-label="" color="primary">
          <a
            href="https://www.twitter.com/pyderator"
            target="_blank"
            style={{ color: "#00acee" }}
          >
            <Twitter fontSize="large" />
          </a>
        </IconButton>
        <IconButton aria-label="" color="primary">
          <Telegram fontSize="large" style={{ color: "#0088CC" }} />
        </IconButton>
        <IconButton aria-label="" color="primary">
          <a href="https://www.instagram.com/__gaurav.jha">
            <Instagram fontSize="large" style={{ color: "#3F729B" }} />
          </a>
        </IconButton>
        <IconButton aria-label="" color="primary">
          <a href="https://www.linkedin.com/in/pyderator/">
            <LinkedIn fontSize="large" style={{ color: "#0E76A8" }} />
          </a>
        </IconButton>
        <IconButton aria-label="">
          <a href="https://github.com/pyderator">
            <GitHub fontSize="large" style={{ color: "#000" }} />
          </a>
        </IconButton>
      </div>
    </footer>
  );
}

export default Footer;
