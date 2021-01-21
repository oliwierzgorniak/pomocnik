import Goals from './Goals.js';
import Orders from './Orders.js';
import Expanses from './Expanses.js';
import Credit from './Credit.js';
import Actions from './Actions.js';
import { useState } from 'react';
import './Expenses.css';
import AddWorker from './AddWorker.js';

function App() {
  // Goals
  const [money, setMoney] = useState(10000);
  const [things, setThings] = useState(0);

  // Orders
  const [multiplier, setMultiplier] = useState(0);
  const [diceRolls, setDiceRolls] = useState(0);
  const [bonus, setBonus] = useState(0);

  // Expanses
  const [insurance, setInsurance] = useState(0);
  const [salary, setSalary] = useState(0);
  const [costs, setCosts] = useState(0);

  const payInsurance = () => {
    setMoney(money - insurance);
  };

  const paySalaryAndCosts = () => {
    setMoney(money - salary - costs);
  };

  // Credit
  const [credit1, setCredit1] = useState(0);
  const [credit2, setCredit2] = useState(0);

  // Actions Add Worker
  const [workerMultiplier, setWorkerMultiplier] = useState(3);
  const [workerSalary, setWorkerSalary] = useState(5000);
  const [workerInsurance, setWorkerInsurance] = useState(2000);

  const addWorker = () => {
    setWorkerMultiplier(multiplier + workerMultiplier);
    setWorkerSalary(salary + workerSalary);
    setWorkerInsurance(insurance + workerInsurance);
  };

  return (
    <div className="App">
      <Goals money={money} things={things} workers={0} />
      <Orders multiplier={multiplier} diceRolls={diceRolls} bonus={bonus} />
      <Expanses insurance={insurance} salary={salary} costs={costs} payInsurance={payInsurance} paySalaryAndCosts={paySalaryAndCosts} />
      <Credit credit1={credit1} credit2={credit2} />
      <Actions />
      {false && <AddWorker workerMultiplier={workerMultiplier} workerSalary={workerSalary} workerInsurance={workerInsurance} />}
    </div>
  );
}

export default App;
