import Goals from './Goals.js';
import Orders from './Orders.js';
import Expanses from './Expanses.js';
import Credit from './Credit.js';
import Actions from './Actions.js';
import { useState } from 'react';
import './Expenses.css';
import AddWorker from './AddWorker.js';

function App() {
  const [money, setMoney] = useState(0);
  const [insurance, setInsurance] = useState(0);
  const [salary, setSalary] = useState(0);
  const [costs, setCosts] = useState(0);

  const payInsurance = () => {
    setMoney(money - insurance);
  };

  const paySalaryAndCosts = () => {
    setMoney(money - salary - costs);
  };

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
      <Orders />
      <Expanses insurance={insurance} salary={salary} costs={costs} payInsurance={payInsurance} paySalaryAndCosts={paySalaryAndCosts} />
      <Credit />
      <Actions />
      {false && <AddWorker workerMultiplier={workerMultiplier} workerSalary={workerSalary} workerInsurance={workerInsurance} />}
    </div>
  );
}

export default App;
