import React from "react";
import { PropTypes } from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  button1: {},
}));

export default function ContainedButtons({ className, text, color }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button className={className} variant="contained" color={color}>
        {text}
      </Button>
    </div>
  );
}
