import React from "react";
import change from "./img/change.svg";
import "./Window.css";
import more from "./img/more.svg";
import less from "./img/less.svg";

const Orders = props => {
  return (
    <>
      <section className="container" style={{ background: "#EF6C00" }}>
        <button
          onClick={() => props.setChangeOrdersOpen(true)}
          className="changeButton"
        >
          <img src={change}></img>
        </button>
        <li>
          <ul style={{ marginBottom: ".2rem", fontWeight: "700" }}>
            Mnożnik: {props.multiplier}
          </ul>
          <ul>Rzuty kostką: {props.diceRolls}</ul>
          <ul>Dodatek: {props.bonus}</ul>
        </li>
      </section>
      {props.changeOrdersOpen && (
        <div className="window">
          <label htmlFor="multiplier">
            Mnożnik: <br /> <small>{props.multiplier}</small>
            <div className="buttons" name="multiplier">
              <button
                onClick={() => {
                  if (props.multiplier <= 1) return;
                  props.setMultiplier(props.multiplier - 1);
                }}
              >
                <img src={less} alt="less"></img>
              </button>
              <button onClick={() => props.setMultiplier(props.multiplier + 1)}>
                <img src={more} alt="more"></img>
              </button>
            </div>
          </label>
          <label htmlFor="diceRolls">
            Rzuty kostką: <br /> <small>{props.diceRolls}</small>
            <div className="buttons" name="diceRolls">
              <button
                onClick={() => {
                  if (props.diceRolls <= 1) return;
                  props.setDiceRolls(props.diceRolls - 1);
                }}
              >
                <img src={less} alt="less"></img>
              </button>
              <button onClick={() => props.setDiceRolls(props.diceRolls + 1)}>
                <img src={more} alt="more"></img>
              </button>
            </div>
          </label>
          <label htmlFor="bonus">
            Dodatek: <br /> <small>{props.bonus}</small>
            <div className="buttons" name="bonus">
              <button
                onClick={() => {
                  if (props.bonus <= 1000) return;
                  props.setBonus(props.bonus - 1000);
                }}
              >
                <img src={less} alt="less"></img>
              </button>
              <button onClick={() => props.setBonus(props.bonus + 1000)}>
                <img src={more} alt="more"></img>
              </button>
            </div>
          </label>
          <button
            onClick={() => props.setChangeOrdersOpen(false)}
            style={{ backgroundColor: "rgb(61, 90, 254)" }}
            className="window__action"
          >
            OK
          </button>
        </div>
      )}
    </>
  );
};

export default Orders;
