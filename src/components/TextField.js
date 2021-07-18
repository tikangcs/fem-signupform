import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function TextFields({ label, type }) {
  const classes = useStyles();

  return (
    <div className="textfield-wrapper">
      <TextField id={label} label={label} type={type} variant="outlined" />
    </div>
  );
}
