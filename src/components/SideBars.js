import React from "react";

function SideBars() {
  return (
    <span
      style={{
        color: "white",
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        top: "40vh",
        left: "2vw",
      }}
    >
      <a>GH</a>
      <a>LI</a>
    </span>
  );
}

export default SideBars;
