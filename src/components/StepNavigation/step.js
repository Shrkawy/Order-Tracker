import React, { useState } from "react";

export default function Step(props) {
  return (
    <div className={"stepBlock" + (props.selected ? " selected" : "")}>
      <div
        className={"circleWrapper"}
        // below: enables user to click on the step numbers to choose a page.
        // onClick={() => props.updateStep(props.index + 1)}
      >
        <div className="circle">
          <div className="circleContent">{props.index + 1}</div>
        </div>
      </div>
      <span className="stepTitle">{props.label}</span>
    </div>
  );
}
