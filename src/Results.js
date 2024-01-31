import React from "react";
import Meaning from "./Meaning";

function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h1>{props.results.word}</h1>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
                <Meaning meaning={meaning} />
            </div>
          )
        })}
      </div>
    );
  } else {
    return null;
  }
}

export default Results;
