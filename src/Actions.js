import './Actions.css';
import worker from './img/worker.svg';
import order from './img/order.svg';
import buy from './img/buy.svg';
import { useState } from 'react';

const Actions = () => {
  const [dice, setDice] = useState(6);

  const randomNumber = () => {
    const animation = () => (dice.style.transform = 'scale(1)');
    const dice = document.querySelector('.dice');
    dice.style.transform = 'scale(0.7)';
    setTimeout(animation, 300);
    setDice((Math.floor(Math.random() * 10) % 6) + 1);
  };

  const [workerMultiplyer, setWorkerMultiplyer] = useState(3);
  const [workerSalary, setWorkerSalary] = useState(5000);
  const [workerInsurance, setWorkerInsurance] = useState(2000);

  return (
    <section className="actions">
      <button className="action" style={{ backgroundColor: '#3D5AFE' }}>
        <img src={worker} alt="worker" />
      </button>
      <button className="action" style={{ backgroundColor: '#EF6C00' }}>
        <img src={order} alt="order" />
      </button>
      <button className="action" style={{ backgroundColor: '#FBD200' }}>
        <img src={buy} alt="buy" />
      </button>
      <button onClick={randomNumber} className="dice">
        <img src={`./dice/dice${dice}.svg`} alt="dice" />
        {/*CC BY-SA 4.0 Vikas Singh https://stackoverflow.com/questions/54033765/how-to-give-image-src-dynamically-in-react-js Changes were made.*/}
      </button>
    </section>
  );
};

export default Actions;
