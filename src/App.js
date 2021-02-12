/* eslint-disable no-unused-vars */
import Goals from "./Goals.js";
import Orders from "./Orders.js";
import Expanses from "./Expanses.js";
import Credit from "./Credit.js";
import Actions from "./Actions.js";
import React, { useState, useEffect } from "react";
import "./Expenses.css";
import AddWorker from "./AddWorker.js";
import AddOrder from "./AddOrder";
import AddThing from "./AddThing";
import { func } from "prop-types";
import Win from "./Win.js";

function App() {
  // Goals
  const [money, setMoney] = useState(10000);
  const [things, setThings] = useState(0);
  const [workers, setWorkers] = useState(0);
  const [placeChecked, setPlaceChecked] = useState(false);
  const [investorChecked, setInvestorChecked] = useState(false);
  const [changeGoalsOpen, setChangeGoalsOpen] = useState(false);
  const [winOpen, setWinOpen] = useState(false);

  useEffect(() => {
    if (workers < 5 || !placeChecked) return;
    if (investorChecked && money + things >= 1000000) {
      setWinOpen(true);
      return;
    }
    if (money + things >= 2000000) {
      setWinOpen(true);
      return;
    }
    return;
  }, [money, things, workers, placeChecked, investorChecked]);

  // Orders
  const [multiplier, setMultiplier] = useState(0);
  const [diceRolls, setDiceRolls] = useState(0);
  const [bonus, setBonus] = useState(0);
  const [changeOrdersOpen, setChangeOrdersOpen] = useState(false);

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
    setWorkers(workers + 1);
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
      <Goals
        money={money}
        setMoney={setMoney}
        things={things}
        setThings={setThings}
        workers={workers}
        setWorkers={setWorkers}
        placeChecked={placeChecked}
        setPlaceChecked={setPlaceChecked}
        investorChecked={investorChecked}
        setInvestorChecked={setInvestorChecked}
        changeGoalsOpen={changeGoalsOpen}
        setChangeGoalsOpen={setChangeGoalsOpen}
      />
      <Orders
        multiplier={multiplier}
        setMultiplier={setMultiplier}
        diceRolls={diceRolls}
        setDiceRolls={setDiceRolls}
        bonus={bonus}
        setBonus={setBonus}
        changeOrdersOpen={changeOrdersOpen}
        setChangeOrdersOpen={setChangeOrdersOpen}
      />
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
      {winOpen && <Win winOpen={winOpen} setWinOpen={setWinOpen} />}
    </div>
  );
}

export default App;
