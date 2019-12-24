import React, { useState } from "react";
import data from "../data/data.json";

import AddSubgenre from "./AddSubgenre/AddSubgenre";
import Information from "./Information/Information";
import SubGenre from "./SubGenre/SubGenre";
import Genre from "./Genre/Genre";
import Button from "./UI/Button/Button";
import classes from "./MainShelf.module.css";
const MainShelf = props => {
  const [activeStep, setActiveStep] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const books = data.genres.map(item => {
    return <li key={item.id}>{item.name}</li>;
  });

  console.log(activeStep);
  const nextStepHandler = e => {
    console.log("Next");
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const prevStepHandler = e => {
    console.log("Prev");
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  // const renderContent = () => {
  //   switch (this.state.currentStep) {
  //   switch (activeStep) {
  //     case 0: return (<Template1 verify={this.verify} changeCurrentStep={setActiveStep} />)
  //   }
  // }

  return (
    <div className={classes.MainShelf}>
      <h1>Add book - New Book</h1>
      <div className={classes.MainContent}>
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
