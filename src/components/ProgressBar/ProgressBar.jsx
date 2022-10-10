import React from "react";

const ProgressBar = (props) => {
  const { completed } = props;
  const proficiency = "Beginner";

  const containerStyles = {
    height: 20,
    width: "100%",
    border: "0.5px solid #FECCCB",
    backgroundColor: "#FECCCB",
    borderRadius: 50,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: "#FF5151", // progressbar
    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}></span>
      </div>
    </div>
  );
};

export default ProgressBar;
