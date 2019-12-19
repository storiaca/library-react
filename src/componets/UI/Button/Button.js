import React from "react";
import classes from "./Button.module.css";

const Button = ({ name }) => {
  return (
    <>
      <button className={classes.Button}>{name}</button>
    </>
  );
};

export default Button;
