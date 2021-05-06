import React from "react";
import { Grid, LinearProgress } from "@material-ui/core";

import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "block",
    width: "100%",
    padding: "10px 10px 10px 0px",
  },
  name: {
    marginBottom: "5px",
    fontFamily: "Nunito",
    fontSize: "18px",
    lineHeight: "22px",
    color: "rgba(0,0,0,.8)",
    "&::selection": {
      backgroundColor: "#000",
      color: "#FFF",
    },
  },
}));
const Skill: React.FC<{ value: string; index: number }> = ({
  value,
  index,
}) => {
  const classes = useStyles();
  const [name, data] = value.split(":");

  return (
    <Grid item sm={12} md={6} className={classes.root}>
      <p className={classes.name}>{name}</p>
      <LinearProgress
        color={index % 2 === 0 ? "primary" : "secondary"}
        value={parseInt(data)}
        variant="determinate"
      />
    </Grid>
  );
};

export default Skill;
