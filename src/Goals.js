import "./Goals.css";
import React from "react";
import PropTypes from "prop-types";
import change from "./img/change.svg";
import "./Window.css";
import more from "./img/more.svg";
import less from "./img/less.svg";

const Goals = props => {
  return (
    <>
      <main className="container" style={{ background: "#3d5afe" }}>
        <button
          onClick={() => props.setChangeGoalsOpen(true)}
          className="changeButton"
        >
          <img src={change}></img>
        </button>
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
            <input
              onClick={() => props.setPlaceChecked(!props.placeChecked)}
              className="checkbox"
              name="place"
              type="checkbox"
            />
          </div>
          <div>
            <label htmlFor="investor">Inwestor</label>
            <input
              onClick={() => props.setInvestorChecked(!props.investorChecked)}
              name="investor"
              type="checkbox"
            />
          </div>
        </div>
      </main>
      {props.changeGoalsOpen && (
        <div className="window">
          <label htmlFor="money">
            Pieniądze: <br /> <small>{props.money}</small>
            <div className="buttons" name="money">
              <button
                style={{ transform: "scale(.6)", margin: "0 -.2rem" }}
                onClick={() => {
                  if (props.money <= 1000) return;
                  props.setMoney(props.money - 1000);
                }}
              >
                <img src={less} alt="less"></img>
              </button>
              <button
                onClick={() => {
                  if (props.money < 10000) return;
                  props.setMoney(props.money - 10000);
                }}
              >
                <img src={less} alt="less"></img>
              </button>
              <button onClick={() => props.setMoney(props.money + 10000)}>
                <img src={more} alt="more"></img>
              </button>
              <button
                style={{ transform: "scale(.6)", margin: "0 -.2rem" }}
                onClick={() => props.setMoney(props.money + 1000)}
              >
                <img src={more} alt="more"></img>
              </button>
            </div>
          </label>
          <label htmlFor="things">
            Dobra: <br /> <small>{props.things}</small>
            <div className="buttons" name="things">
              <button
                style={{ transform: "scale(.6)", margin: "0 -.2rem" }}
                onClick={() => {
                  if (props.things <= 1000) return;
                  props.setThings(props.things - 1000);
                }}
              >
                <img src={less} alt="less"></img>
              </button>
              <button
                onClick={() => {
                  if (props.things < 10000) return;
                  props.setThings(props.things - 10000);
                }}
              >
                <img src={less} alt="less"></img>
              </button>
              <button onClick={() => props.setThings(props.things + 10000)}>
                <img src={more} alt="more"></img>
              </button>
              <button
                style={{ transform: "scale(.6)", margin: "0 -.2rem" }}
                onClick={() => props.setThings(props.things + 1000)}
              >
                <img src={more} alt="more"></img>
              </button>
            </div>
          </label>
          <label htmlFor="workers">
            Pracownicy: <br /> <small>{props.workers}</small>
            <div className="buttons" name="workers">
              <button
                onClick={() => {
                  if (props.workers <= 1) return;
                  props.setWorkers(props.workers - 1);
                }}
              >
                <img src={less} alt="less"></img>
              </button>
              <button onClick={() => props.setWorkers(props.workers + 1)}>
                <img src={more} alt="more"></img>
              </button>
            </div>
          </label>
          <button
            onClick={() => props.setChangeGoalsOpen(false)}
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

Goals.propTypes = {
  money: PropTypes.number,
  things: PropTypes.number,
};

export default Goals;
