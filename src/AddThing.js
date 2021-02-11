import React from "react";
import PropTypes from "prop-types";
import "./Window.css";
import more from "./img/more.svg";
import less from "./img/less.svg";
import x from "./img/x.svg";

const AddThing = props => {
  return (
    <div className="window">
      <button onClick={() => props.setAddThingOpen(false)} className="xButton">
        <img src={x}></img>
      </button>
      <label htmlFor="thingValue">
        Wartość dobra: <br /> <small>{props.thingValue}</small>
        <div className="buttons" name="thingValue">
          <button
            onClick={() => {
              if (props.thingValue <= 1000) return;
              props.setThingValue(props.thingValue - 1000);
            }}
          >
            <img src={less} alt="less"></img>
          </button>
          <button onClick={() => props.setThingValue(props.thingValue + 1000)}>
            <img src={more} alt="more"></img>
          </button>
        </div>
      </label>
      <label htmlFor="cost">
        Koszt: <br /> <small>{props.thingCost}</small>
        <div className="buttons" name="cost">
          <button
            onClick={() => {
              if (props.thingCost <= 0) return;
              props.setThingCost(props.thingCost - 1000);
            }}
          >
            <img src={less} alt="less"></img>
          </button>
          <button onClick={() => props.setThingCost(props.thingCost + 1000)}>
            <img src={more} alt="more"></img>
          </button>
        </div>
      </label>
      <button
        onClick={props.addThing}
        style={{ backgroundColor: "rgb(61, 90, 254)" }}
        className="window__action"
      >
        Dodaj
      </button>
    </div>
  );
};

AddThing.propTypes = {
  things: PropTypes.number,
  costs: PropTypes.number,
};

export default AddThing;
