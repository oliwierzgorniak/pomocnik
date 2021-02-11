import React from "react";
import PropTypes from "prop-types";
import "./Window.css";
import more from "./img/more.svg";
import less from "./img/less.svg";
import x from "./img/x.svg";

const AddOrder = props => {
  return (
    <div className="window">
      <button onClick={() => props.setAddOrderOpen(false)} className="xButton">
        <img src={x}></img>
      </button>
      <label htmlFor="orderValue">
        Wartość zamówienia: <br /> <small>{props.orderValue}</small>
        <div className="buttons" name="orderValue">
          <button
            onClick={() => {
              if (props.orderValue <= 1) return;
              props.setOrderValue(props.orderValue - 1000);
            }}
          >
            <img src={less} alt="less"></img>
          </button>
          <button onClick={() => props.setOrderValue(props.orderValue + 1000)}>
            <img src={more} alt="more"></img>
          </button>
        </div>
      </label>
      <button
        onClick={props.addOrder}
        style={{ backgroundColor: "rgb(61, 90, 254)" }}
        className="window__action"
      >
        Dodaj
      </button>
    </div>
  );
};

AddOrder.propTypes = {
  orderValue: PropTypes.number,
};

export default AddOrder;
