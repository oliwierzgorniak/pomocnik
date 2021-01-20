import './AddWorker.css';
import './Window.css';
import more from './img/more.svg';
import less from './img/less.svg';

const AddWorker = props => {
  return (
    <div className="window">
      <label for="buttons">
        Mnożnik: <br /> <small>{props.workerMultiplyer}</small>
      </label>
      <div className="buttons" name="buttons">
        <button>
          <img src={less} alt="less"></img>
        </button>
        <button>
          <img src={more} alt="more"></img>
        </button>
      </div>
      <label>
        Pensja: <br /> <small>{props.workerSalary}</small>
      </label>
      <div className="buttons" name="buttons">
        <button>
          <img src={less} alt="less"></img>
        </button>
        <button>
          <img src={more} alt="more"></img>
        </button>
      </div>
      <label>
        Ubezpieczenie: <br /> <small>{props.workerInsurance}</small>
      </label>
      <div className="buttons" name="">
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
