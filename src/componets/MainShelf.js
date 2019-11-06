import React from "react";
import data from "../data/data.json";

import Genre from "./Genre/Genre";
import classes from "./MainShelf.module.css";
const MainShelf = props => {
  const books = data.genres.map(item => {
    return <li key={item.id}>{item.name}</li>;
  });
  return (
    <div className={classes.MainShelf}>
      <h1>Add book - New Book</h1>
      <Genre />
      {books}
    </div>
  );
};

export default MainShelf;
