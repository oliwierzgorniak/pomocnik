import Goals from './Goals.js';
import Orders from './Orders.js';
import Expanses from './Expanses.js';
import Credit from './Credit.js';
import Actions from './Actions.js';
import { useState } from 'react';
import './Expenses.css';
import AddWorker from './AddWorker.js';

function App() {
  const [money, setMoney] = useState(100000);
  const insurance = 500;
  const salary = 10000;
  const costs = 5000;

  const payInsurance = () => {
    setMoney(money - insurance);
  };

  const paySalaryAndCosts = () => {
    setMoney(money - salary - costs);
  };

  return (
    <div className="App">
      <Goals money={money} things={0} workers={0} />
      <Orders />
      <Expanses insurance={insurance} salary={salary} costs={costs} payInsurance={payInsurance} paySalaryAndCosts={paySalaryAndCosts} />
      <Credit />
      <Actions />
      <AddWorker />
    </div>
  );
}

export default App;
