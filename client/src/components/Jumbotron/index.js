import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ backgroundColor: "grey", height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
