import React from "react";
import PropTypes from "prop-types";
import more from "./img/more.svg";
import less from "./img/less.svg";
import x from "./img/x.svg";

const AddWorker = props => {
  return (
    <div className="window">
      <button onClick={() => props.setAddWorkerOpen(false)} className="xButton">
        <img src={x}></img>
      </button>
      <label htmlFor="multiplier">
        Mnożnik: <br /> <small>{props.workerMultiplier}</small>
        <div className="buttons" name="muliplier">
          <button
            onClick={() => {
              if (props.workerMultiplier <= 1) return;
              props.setWorkerMultiplier(props.workerMultiplier - 1);
            }}
          >
            <img src={less} alt="less"></img>
          </button>
          <button
            onClick={() => {
              if (props.workerMultiplier >= 6) return;
              props.setWorkerMultiplier(props.workerMultiplier + 1);
            }}
          >
            <img src={more} alt="more"></img>
          </button>
        </div>
      </label>
      <label htmlFor="salary">
        Pensja: <br /> <small>{props.workerSalary}</small>
        <div className="buttons" name="salary">
          <button
            onClick={() => {
              if (props.workerSalary <= 0) return;
              props.setWorkerSalary(props.workerSalary - 1000);
            }}
          >
            <img src={less} alt="less"></img>
          </button>
          <button
            onClick={() => props.setWorkerSalary(props.workerSalary + 1000)}
          >
            <img src={more} alt="more"></img>
          </button>
        </div>
      </label>
      <label htmlFor="insurance">
        Ubezpieczenie: <br /> <small>{props.workerInsurance}</small>
        <div className="buttons" name="ins  urance">
          <button
            onClick={() => {
              if (props.workerInsurance <= 0) return;
              props.setWorkerInsurance(props.workerInsurance - 1000);
            }}
          >
            <img src={less} alt="less"></img>
          </button>
          <button
            onClick={() =>
              props.setWorkerInsurance(props.workerInsurance + 1000)
            }
          >
            <img src={more} alt="more"></img>
          </button>
        </div>
      </label>
      <button
        onClick={props.addWorker}
        style={{ backgroundColor: "rgb(61, 90, 254)" }}
        className="window__action"
      >
        Dodaj
      </button>
    </div>
  );
};

AddWorker.propTypes = {
  workerMultiplier: PropTypes.number,
  workerSalary: PropTypes.number,
  workerInsurance: PropTypes.number,
};

export default AddWorker;
