import React from "react";
import LabTestsSection from "./LabTestsSection.jsx";
import { testData } from "../Data/testData.js";

const Test = () => {
  return (
    <div>
      <LabTestsSection testData={testData} />
    </div>
  );
};

export default Test;
