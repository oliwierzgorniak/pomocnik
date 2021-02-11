/* eslint-disable no-unused-vars */
import Goals from "./Goals.js";
import Orders from "./Orders.js";
import Expanses from "./Expanses.js";
import Credit from "./Credit.js";
import Actions from "./Actions.js";
import React, { useState } from "react";
import "./Expenses.css";
import AddWorker from "./AddWorker.js";
import AddOrder from "./AddOrder";
import AddThing from "./AddThing";
import { func } from "prop-types";

function App() {
  // Goals
  const [money, setMoney] = useState(10000);
  const [things, setThings] = useState(0);

  // Orders
  const [multiplier, setMultiplier] = useState(1);
  const [diceRolls, setDiceRolls] = useState(1);
  const [bonus, setBonus] = useState(1000);

  // Expanses
  const [insurance, setInsurance] = useState(0);
  const [salary, setSalary] = useState(0);
  const [costs, setCosts] = useState(0);
  const [changeExpensesOpen, setChangeExpensesOpen] = useState(false);

  const payInsurance = () => {
    setMoney(money - insurance);
  };

  const paySalaryAndCosts = () => {
    setMoney(money - salary - costs);
  };

  // Credit
  const [credit1, setCredit1] = useState(0);
  const [credit2, setCredit2] = useState(0);
  const [changeCreditOpen, setChangeCreditOpen] = useState(false);

  const changeCredit = () => {
    console.log(this);
  };

  // Actions Add Worker
  const [addWorkerOpen, setAddWorkerOpen] = useState(false);
  const [workerMultiplier, setWorkerMultiplier] = useState(3);
  const [workerSalary, setWorkerSalary] = useState(5000);
  const [workerInsurance, setWorkerInsurance] = useState(2000);

  const addWorker = () => {
    if (addThingOpen || addOrderOpen) {
      setAddWorkerOpen(false);
      setAddOrderOpen(false);
    }
    setMultiplier(multiplier + workerMultiplier);
    setSalary(salary + workerSalary);
    setInsurance(insurance + workerInsurance);
    setAddWorkerOpen(false);
  };

  // Actions Add Order
  const [addOrderOpen, setAddOrderOpen] = useState(false);
  const [orderValue, setOrderValue] = useState(2000);

  const addOrder = () => {
    if (addWorkerOpen || addThingOpen) {
      setAddWorkerOpen(false);
      setAddThingOpen(false);
    }
    const totalDiceBonus =
      diceRolls * 1000 * ((Math.floor(Math.random() * 10) % 6) + 1);
    console.log(totalDiceBonus);
    const totalOrderValue = multiplier * orderValue + totalDiceBonus + bonus;
    setMoney(money + totalOrderValue);
    setAddOrderOpen(false);
  };

  // Actions Add Thing
  const [addThingOpen, setAddThingOpen] = useState(false);
  const [thingValue, setThingValue] = useState(2000);
  const [thingCost, setThingCost] = useState(1000);

  const addThing = () => {
    setThings(things + thingValue);
    setAddThingOpen(false);
    setCosts(costs + thingCost);
  };

  return (
    <div className="App">
      <Goals money={money} things={things} workers={0} />
      <Orders multiplier={multiplier} diceRolls={diceRolls} bonus={bonus} />
      <Expanses
        insurance={insurance}
        setInsurance={setInsurance}
        salary={salary}
        setSalary={setSalary}
        costs={costs}
        setCosts={setCosts}
        payInsurance={payInsurance}
        paySalaryAndCosts={paySalaryAndCosts}
        changeExpensesOpen={changeExpensesOpen}
        setChangeExpensesOpen={setChangeExpensesOpen}
      />
      <Credit
        changeCredit={changeCredit}
        changeCreditOpen={changeCreditOpen}
        setChangeCreditOpen={setChangeCreditOpen}
        credit1={credit1}
        setCredit1={setCredit1}
        credit2={credit2}
        setCredit2={setCredit2}
      />
      <Actions
        setAddWorkerOpen={setAddWorkerOpen}
        setAddOrderOpen={setAddOrderOpen}
        setAddThingOpen={setAddThingOpen}
      />
      {addWorkerOpen && (
        <AddWorker
          setAddWorkerOpen={setAddWorkerOpen}
          workerMultiplier={workerMultiplier}
          setWorkerMultiplier={setWorkerMultiplier}
          workerSalary={workerSalary}
          setWorkerSalary={setWorkerSalary}
          workerInsurance={workerInsurance}
          setWorkerInsurance={setWorkerInsurance}
          addWorker={addWorker}
        />
      )}
      {addOrderOpen && (
        <AddOrder
          setAddOrderOpen={setAddOrderOpen}
          orderValue={orderValue}
          setOrderValue={setOrderValue}
          addOrder={addOrder}
        />
      )}
      {addThingOpen && (
        <AddThing
          setAddThingOpen={setAddThingOpen}
          thingValue={thingValue}
          setThingValue={setThingValue}
          thingCost={thingCost}
          setThingCost={setThingCost}
          addThing={addThing}
        />
      )}
    </div>
  );
}

export default App;
