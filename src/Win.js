import React from "react";

const Win = props => {
  return (
    <div className="window">
      <h2>Wygrałeś! </h2>
      <button
        onClick={() => {
          localStorage.clear();
          props.setWinOpen(false);
          window.location.reload();
        }}
        className="window__action"
        style={{
          background: "#EF6C00",
          width: "13ch",
          marginTop: "1.5rem",
          fontSize: ".9rem",
        }}
      >
        Jescze raz?
      </button>
    </div>
  );
};

export default Win;
