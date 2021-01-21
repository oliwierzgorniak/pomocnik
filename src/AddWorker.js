import './AddWorker.css';
import './Window.css';
import more from './img/more.svg';
import less from './img/less.svg';

const AddWorker = props => {
  return (
    <div className="window">
      <label for="multiplier">
        Mnożnik: <br /> <small>{props.workerMultiplier}</small>
      </label>
      <div className="buttons" name="muliplier">
        <button>
          <img src={less} alt="less"></img>
        </button>
        <button>
          <img src={more} alt="more"></img>
        </button>
      </div>
      <label for="salary">
        Pensja: <br /> <small>{props.workerSalary}</small>
      </label>
      <div className="buttons" name="salary">
        <button>
          <img src={less} alt="less"></img>
        </button>
        <button>
          <img src={more} alt="more"></img>
        </button>
      </div>
      <label for="insurance">
        Ubezpieczenie: <br /> <small>{props.workerInsurance}</small>
      </label>
      <div className="buttons" name="ins  urance">
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
