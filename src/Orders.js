import React from "react";

const Orders = props => {
  return (
    <section className="container" style={{ background: "#EF6C00" }}>
      <li>
        <ul style={{ marginBottom: ".2rem", fontWeight: "700" }}>
          Mnożnik: {props.multiplier}
        </ul>
        <ul>Rzuty kostką: {props.diceRolls}</ul>
        <ul>Dodatek: {props.bonus}</ul>
      </li>
    </section>
  );
};

export default Orders;
