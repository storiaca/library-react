import React from "react";
import data from "../data/data.json";

import AddSubgenre from "./AddSubgenre/AddSubgenre";
import Information from "./Information/Information";
import SubGenre from "./SubGenre/SubGenre";
import Genre from "./Genre/Genre";
import Button from "./UI/Button/Button";
import classes from "./MainShelf.module.css";
const MainShelf = props => {
  const books = data.genres.map(item => {
    return <li key={item.id}>{item.name}</li>;
  });
  return (
    <div className={classes.MainShelf}>
      <h1>Add book - New Book</h1>
      <Genre />
      <SubGenre />
      <AddSubgenre />
      <Information />
      <Button name={"Next"} />
      <Button name={"Previous"} />
      {books}
    </div>
  );
};

export default MainShelf;
