import React from "react";
import classes from "./Button.module.css";

const Button = ({ name, nextStep, prevStep }) => {
  let stepType;
  if (name === "Next") {
    stepType = nextStep;
  } else {
    stepType = prevStep;
  }
  return (
    <>
      <button className={classes.Button} onClick={stepType}>
        {name}
      </button>
    </>
  );
};

export default Button;
