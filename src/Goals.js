import "./Goals.css";
import React from "react";
import PropTypes from "prop-types";

const Goals = props => {
  return (
    <main className="container" style={{ background: "#3d5afe" }}>
      <li>
        <ul className="wealth">Majątek: {props.money + props.things}</ul>
        <ul>Pieniądze: {props.money}</ul>
        <ul>Dobra: {props.things}</ul>
        <ul style={{ marginTop: ".3rem" }}>
          Liczba pracowników: {props.workers}
        </ul>
      </li>
      <div className="checkboxes">
        <div>
          <label htmlFor="place">Siedziba</label>
          <input className="checkbox" name="place" type="checkbox" />
        </div>
        <div>
          <label htmlFor="investor">Inwestor</label>
          <input name="investor" type="checkbox" />
        </div>
      </div>
    </main>
  );
};

Goals.propTypes = {
  money: PropTypes.number,
  things: PropTypes.number,
};

export default Goals;
