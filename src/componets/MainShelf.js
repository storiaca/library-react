import React, { useState } from "react";
import data from "../data/data.json";

import AddSubgenre from "./AddSubgenre/AddSubgenre";
import Information from "./Information/Information";
import SubGenre from "./SubGenre/SubGenre";
import Genre from "./Genre/Genre";
import Button from "./UI/Button/Button";
import classes from "./MainShelf.module.css";
const MainShelf = props => {
  const [step, setStep] = useState(1);

  const books = data.genres.map(item => {
    return <li key={item.id}>{item.name}</li>;
  });

  console.log(step);
  const nextStepHandler = e => {
    console.log("Next");
  };

  const prevStepHandler = e => {
    console.log("Prev");
  };

  return (
    <div className={classes.MainShelf}>
      <h1>Add book - New Book</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Genre />
        <SubGenre />
        <AddSubgenre />
        <Information />
      </div>

      <Button name={"Previous"} prevStep={prevStepHandler} />
      <Button name={"Next"} nextStep={nextStepHandler} />
      {books}
    </div>
  );
};

export default MainShelf;
