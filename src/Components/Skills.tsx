import React from "react";
import Skill from "./Skill";
import { Grid, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: "0 10px",
  },
}));
const Skills = () => {
  const classes = useStyles();
  const thingsIKnow = [
    "HTML:90",
    "CSS: 90",
    "Javascript: 80",
    "React: 80",
    "Node: 70",
    "Python: 80",
    "Django: 60",
    "MySQL: 70",
    "PostgreSQL: 70",
    "MongoDB: 60",
    "GraphQL: 80",
    "URQL: 70",
    "Typescript: 80",
    "Docker: 80",
    "Typeorm: 70",
    "Git and Github: 70",
    "Design: 70",
    "Figma: 80",
  ];
  return (
    <Grid container className={classes.root}>
      {thingsIKnow.map((t, i) => (
        <Skill value={t} key={i} index={i} />
      ))}
    </Grid>
  );
};

export default Skills;
