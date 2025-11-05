import * as React from "react";
import Cards from "../Cards/Cards";
import articles from "../../Services/catalogue.service.js";
import "./DisplayArticle.css";
import catalogue from "../../App.jsx"

function DisplayArticle(props) {
  return (
    <div className="DisplayArticle">
      {props.catalogue.map((value, index) => (
        <Cards key={index} bmd={value} />
      ))}
    </div>
  );
}
export default DisplayArticle;
