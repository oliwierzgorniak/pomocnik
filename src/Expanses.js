import "./Expenses.css";
import React from "react";
import PropTypes from "prop-types";
import change from "./img/change.svg";
import "./Window.css";
import more from "./img/more.svg";
import less from "./img/less.svg";

const Expanses = props => {
  return (
    <>
      <section className="container expenses">
        <div className="expansesContainer">
          <button
            onClick={() => props.setChangeExpensesOpen(true)}
            className="changeButton"
            style={{ top: ".4rem", right: ".4rem" }}
          >
            <img src={change}></img>
          </button>
          <li>
            <ul style={{ marginBottom: ".4rem", fontSize: ".8rem" }}>
              Ubezpieczenie: {props.insurance}
            </ul>
            <ul>Pensje: {props.salary}</ul>
            <ul>Koszty: {props.costs}</ul>
          </li>
        </div>
        <button
          className="minusButton"
          onClick={props.payInsurance}
          style={{ background: "#9C27B0", gridRow: "1/2" }}
        ></button>
        <button
          className="minusButton"
          onClick={props.paySalaryAndCosts}
          style={{ background: "#F44336", gridRow: "2/3" }}
        ></button>
      </section>
      {props.changeExpensesOpen && (
        <div className="window">
          <label htmlFor="insurance">
            Ubezpieczenie: <br /> <small>{props.insurance}</small>
            <div className="buttons" name="insurance">
              <button
                onClick={() => {
                  if (props.insurance <= 1000) return;
                  props.setInsurance(props.insurance - 1000);
                }}
              >
                <img src={less} alt="less"></img>
              </button>
              <button
                onClick={() => props.setInsurance(props.insurance + 1000)}
              >
                <img src={more} alt="more"></img>
              </button>
            </div>
          </label>
          <label htmlFor="salary">
            Pensje: <br /> <small>{props.salary}</small>
            <div className="buttons" name="salary">
              <button
                onClick={() => {
                  if (props.salary <= 1000) return;
                  props.setSalary(props.salary - 1000);
                }}
              >
                <img src={less} alt="less"></img>
              </button>
              <button onClick={() => props.setSalary(props.salary + 1000)}>
                <img src={more} alt="more"></img>
              </button>
            </div>
          </label>
          <label htmlFor="costs">
            Koszty: <br /> <small>{props.costs}</small>
            <div className="buttons" name="costs">
              <button
                onClick={() => {
                  if (props.costs <= 1000) return;
                  props.setCosts(props.costs - 1000);
                }}
              >
                <img src={less} alt="less"></img>
              </button>
              <button onClick={() => props.setCosts(props.costs + 1000)}>
                <img src={more} alt="more"></img>
              </button>
            </div>
          </label>
          <button
            onClick={() => props.setChangeExpensesOpen(false)}
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

Expanses.propTypes = {
  insurance: PropTypes.number,
  salary: PropTypes.number,
  costs: PropTypes.number,
  payInsurance: PropTypes.func,
  paySalaryAndCosts: PropTypes.func,
};

export default Expanses;
