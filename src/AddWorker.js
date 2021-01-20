import './AddWorker.css';
<<<<<<< HEAD
import './Window.css';
=======
import './Message.css';
>>>>>>> 5f1708d76c6c856f6c612540232677f50c0eb62e
import more from './img/more.svg';
import less from './img/less.svg';

const AddWorker = props => {
  return (
    <div className="window">
      <label for="buttons">Mnożnik: {props.workerMultiplyer}</label>
      <div name="buttons">
        <button>
          <img src={less} alt="less"></img>
        </button>
        <button>
          <img src={more} alt="more"></img>
        </button>
      </div>
      <label>Pensja: {props.workerSalary}</label>
      <div name="buttons">
        <button>
          <img src={less} alt="less"></img>
        </button>
        <button>
          <img src={more} alt="more"></img>
        </button>
      </div>
      <label>Ubezpieczenie: {props.workerInsurance}</label>
      <div name="">
        <button>
          <img src={less} alt="less"></img>
        </button>
        <button>
          <img src={more} alt="more"></img>
        </button>
      </div>
      <button style={{ backgroundColor: 'rgb(61, 90, 254)' }} className="window__action">
        Dodaj
      </button>
    </div>
  );
};

export default AddWorker;
