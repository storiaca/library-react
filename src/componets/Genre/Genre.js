import React from "react";
import Button from "../UI/Button/Button";
import classes from "./Genre.module.css";
const Genre = () => {
  return (
    <div className={classes.Genre}>
      <h3>Genre</h3>
      <Button name={"Next"} />
      <Button name={"Previous"} />
      <Button name={"Add"} />
    </div>
  );
};

export default Genre;
