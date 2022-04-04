import React, { useState } from "react";
import Step from "./step";

export default function StepNavigation(props) {
  return (
    <>
      <div className="stepContainer">
        <div className="progressTitle">Point of Sale Order Confirmation</div>
        <div className="stepWrapper">
          {props.labelArray.map((item, index) => (
            <Step
              key={index}
              index={index}
              label={item}
              selected={props.currentStep === index + 1}
              updateStep={props.updateStep}
            ></Step>
          ))}
        </div>
      </div>
    </>
  );
}
