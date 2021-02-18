import Goals from "./Goals.js";
import Orders from "./Orders.js";
import Expanses from "./Expanses.js";
import Credit from "./Credit.js";
import Actions from "./Actions.js";
import React, { useState, useEffect } from "react";
import AddWorker from "./AddWorker.js";
import AddOrder from "./AddOrder";
import AddThing from "./AddThing";
import Win from "./Win.js";

//styles
import "./styles/Expenses.css";
import "./styles/Goals.css";
import "./styles/Window.css";
import "./styles/Actions.css";

import "./styles/media.css";

function App() {
  // Goals
  const [money, setMoney] = useState(() =>
    localStorage.getItem("money")
      ? parseInt(localStorage.getItem("money"))
      : 10000
  );

  const [things, setThings] = useState(() =>
    localStorage.getItem("things")
      ? parseInt(localStorage.getItem("things"))
      : 0
  );

  const [workers, setWorkers] = useState(() =>
    localStorage.getItem("workers")
      ? parseInt(localStorage.getItem("workers"))
      : 0
  );

  {
    /*CC BY-SA 4.0 Christian C. Salvadó, Cœur https://stackoverflow.com/questions/3263161/cannot-set-boolean-values-in-localstorage Changes were made.*/
  }
  const [placeChecked, setPlaceChecked] = useState(() => {
    if (localStorage.getItem("placeChecked")) {
      return JSON.parse(localStorage.getItem("placeChecked"));
    } else return false;
  });

  const [investorChecked, setInvestorChecked] = useState(() => {
    if (localStorage.getItem("investorChecked")) {
      return JSON.parse(localStorage.getItem("investorChecked"));
    } else return false;
  });
  const [changeGoalsOpen, setChangeGoalsOpen] = useState(false);
  const [winOpen, setWinOpen] = useState(false);

  // Orders
  const [multiplier, setMultiplier] = useState(() =>
    localStorage.getItem("multiplier")
      ? parseInt(localStorage.getItem("multiplier"))
      : 0
  );
  const [diceRolls, setDiceRolls] = useState(() =>
    localStorage.getItem("diceRolls")
      ? parseInt(localStorage.getItem("diceRolls"))
      : 0
  );
  const [bonus, setBonus] = useState(() =>
    localStorage.getItem("bonus") ? parseInt(localStorage.getItem("bonus")) : 0
  );
  const [changeOrdersOpen, setChangeOrdersOpen] = useState(false);

  // Expanses
  const [insurance, setInsurance] = useState(() =>
    localStorage.getItem("insurance")
      ? parseInt(localStorage.getItem("insurance"))
      : 0
  );
  const [salary, setSalary] = useState(() =>
    localStorage.getItem("salary")
      ? parseInt(localStorage.getItem("salary"))
      : 0
  );
  const [costs, setCosts] = useState(() =>
    localStorage.getItem("costs") ? parseInt(localStorage.getItem("costs")) : 0
  );
  const [changeExpensesOpen, setChangeExpensesOpen] = useState(false);

  const payInsurance = () => {
    setMoney(money - insurance);
  };

  const paySalaryAndCosts = () => {
    setMoney(money - salary - costs);
  };

  // Credit
  const [credit1, setCredit1] = useState(() =>
    localStorage.getItem("credit1")
      ? parseInt(localStorage.getItem("credit1"))
      : 0
  );
  const [credit2, setCredit2] = useState(() =>
    localStorage.getItem("credit2")
      ? parseInt(localStorage.getItem("credit2"))
      : 0
  );
  const [changeCreditOpen, setChangeCreditOpen] = useState(false);

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
    setCosts(costs + thingCost);
    setMoney(money - thingValue);
    setAddThingOpen(false);
  };

  // useEffects

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

  useEffect(() => {
    localStorage.setItem("money", money);
  }, [money]);

  useEffect(() => {
    localStorage.setItem("things", things);
  }, [things]);

  useEffect(() => {
    localStorage.setItem("workers", workers);
  }, [workers]);

  useEffect(() => {
    localStorage.setItem("investorChecked", investorChecked);
  }, [investorChecked]);

  useEffect(() => {
    localStorage.setItem("placeChecked", placeChecked);
  }, [placeChecked]);

  useEffect(() => {
    localStorage.setItem("multiplier", multiplier);
  }, [multiplier]);

  useEffect(() => {
    localStorage.setItem("diceRolls", diceRolls);
  }, [diceRolls]);

  useEffect(() => {
    localStorage.setItem("bonus", bonus);
  }, [bonus]);

  useEffect(() => {
    localStorage.setItem("insurance", insurance);
  }, [insurance]);

  useEffect(() => {
    localStorage.setItem("salary", salary);
  }, [salary]);

  useEffect(() => {
    localStorage.setItem("costs", costs);
  }, [costs]);

  useEffect(() => {
    localStorage.setItem("credit1", credit1);
  }, [credit1]);

  useEffect(() => {
    localStorage.setItem("credit2", credit2);
  }, [credit2]);

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
