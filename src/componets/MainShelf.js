import React, { useState } from "react";
import data from "../data/data.json";

import AddSubgenre from "./AddSubgenre/AddSubgenre";
import Information from "./Information/Information";
import SubGenre from "./SubGenre/SubGenre";
import Genre from "./Genre/Genre";
import Button from "./UI/Button/Button";
import FullTabs from "./UI/Tabs/FullTabs";
import classes from "./MainShelf.module.css";
const MainShelf = props => {
  const [activeStep, setActiveStep] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const books = data.genres.map(item => {
    return <li key={item.id}>{item.name}</li>;
  });

  console.log("step", activeStep);
  const nextStepHandler = e => {
    e.preventDefault();
    console.log("Next");
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const prevStepHandler = e => {
    e.preventDefault();
    console.log("Prev");
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const renderContent = activeStep => {
    // case 0:
    //     return <Genre verify={this.verify} changeCurrentStep={setActiveStep} />;
    switch (activeStep) {
      case 0:
        return <Genre />;
      case 1:
        return <SubGenre />;
      case 2:
        return <AddSubgenre />;
      case 3:
        return <Information />;
    }
  };

  return (
    <div className={classes.MainShelf}>
      <h1>Add book - New Book</h1>
      <div className={classes.MainContent}>
        {/* <Genre />
        <SubGenre />
        <AddSubgenre />
        <Information /> */}
      </div>

      <Button name={"Previous"} prevStep={prevStepHandler} />
      <Button name={"Next"} nextStep={nextStepHandler} />
      {books}

      <FullTabs />
    </div>
  );
};

export default MainShelf;
