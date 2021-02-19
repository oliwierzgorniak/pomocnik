import React from "react";
import PropTypes from "prop-types";
import change from "./img/change.svg";
import more from "./img/more.svg";
import less from "./img/less.svg";
import { CSSTransition } from "react-transition-group";

const Credit = props => {
  return (
    <>
      <section className="container" style={{ background: "#08B7CA" }}>
        <button
          onClick={() => props.setChangeCreditOpen(true)}
          className="changeButton"
        >
          <img src={change}></img>
        </button>
        <li>
          <ul data-state={"Credit1"} onClick={props.change}>
            Kredyt 1: {props.credit1}
          </ul>
          <ul>Kredyt 2: {props.credit2}</ul>
        </li>
      </section>
      <CSSTransition
        in={props.changeCreditOpen}
        timeout={300}
        classNames="window"
        unmountOnExit
      >
        <div className="window">
          <label htmlFor="credit1">
            Kredyt 1: <br /> <small>{props.credit1}</small>
            <div className="buttons" name="credit1">
              <button
                style={{ transform: "scale(.6)", margin: "0 -.2rem" }}
                onClick={() => {
                  if (props.credit1 < 1000) return;
                  props.setCredit1(props.credit1 - 1000);
                }}
              >
                <img src={less} alt="less"></img>
              </button>
              <button
                onClick={() => {
                  if (props.credit1 < 10000) return;
                  props.setCredit1(props.credit1 - 10000);
                }}
              >
                <img src={less} alt="less"></img>
              </button>
              <button onClick={() => props.setCredit1(props.credit1 + 10000)}>
                <img src={more} alt="more"></img>
              </button>
              <button
                style={{ transform: "scale(.6)", margin: "0 -.2rem" }}
                onClick={() => props.setCredit1(props.credit1 + 1000)}
              >
                <img src={more} alt="more"></img>
              </button>
            </div>
          </label>
          <label htmlFor="credit2">
            Kredyt 2: <br /> <small>{props.credit2}</small>
            <div className="buttons" name="credit1">
              <button
                style={{ transform: "scale(.6)", margin: "0 -.2rem" }}
                onClick={() => {
                  if (props.credit2 < 1000) return;
                  props.setCredit2(props.credit2 - 1000);
                }}
              >
                <img src={less} alt="less"></img>
              </button>
              <button
                onClick={() => {
                  if (props.credit2 < 10000) return;
                  props.setCredit2(props.credit2 - 10000);
                }}
              >
                <img src={less} alt="less"></img>
              </button>
              <button onClick={() => props.setCredit2(props.credit2 + 10000)}>
                <img src={more} alt="more"></img>
              </button>
              <button
                style={{ transform: "scale(.6)", margin: "0 -.2rem" }}
                onClick={() => props.setCredit2(props.credit2 + 1000)}
              >
                <img src={more} alt="more"></img>
              </button>
            </div>
          </label>
          <button
            onClick={() => props.setChangeCreditOpen(false)}
            style={{ backgroundColor: "rgb(61, 90, 254)" }}
            className="window__action"
          >
            OK
          </button>
        </div>
      </CSSTransition>
    </>
  );
};

Credit.propTypes = {
  credit1: PropTypes.number,
  credit2: PropTypes.number,
};

export default Credit;
