import React from "react";

export default function SurveyDocumentation() {
  const greenStyle = {
    color: "#8fb129",
  };
  const heading = {
    color: "#8fb129",
    fontSize: "18px",
  };

  return (
    <>
      <h3 style={heading}>Additional Information</h3>
      <p>sdfdfsdfasdfasf</p>
      <p>There are a few primary settings that can be utilised.</p>
      <p>
        <strong style={greenStyle}>Ongoing/Start Date/End Date</strong> -
        Surveys can run until manually disabled or be set for specific dates.
      </p>
    </>
  );
}
