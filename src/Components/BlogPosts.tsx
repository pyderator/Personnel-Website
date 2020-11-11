import React from "react";
import { makeStyles, Theme } from "@material-ui/core";
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: "1140px",
    margin: "50px auto",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "600px",
      width: "100%",
      //   padding: "0 10px",
    },
  },
  header_title: {
    fontFamily: "Nunito",
    fontSize: "48px",
    lineHeight: "58px",
    width: "100%",
    textAlign: "center",
    fontWeight: 500,
    margin: "50px 0",
  },
}));
function BlogPosts() {
  const classes = useStyles();
  return (
    <div className={classes.root} id="blog">
      <h1 className={classes.header_title} data-aos="fade-left">
        Blog Posts
      </h1>
      <div id="medium-widget" data-aos="fade-right"></div>
    </div>
  );
}

export default BlogPosts;
