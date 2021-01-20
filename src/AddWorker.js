import './AddWorker.css';
import './Window.css';
import more from './img/more.svg';
import less from './img/less.svg';

const AddWorker = props => {
  return (
    <div className="window">
      <figure>
        <figcaption>Mnożnik: {props.workerMultiplyer}</figcaption>
        <button>
          <img src={less} alt="less"></img>
        </button>
        <button>
          <img src={more} alt="more"></img>
        </button>
      </figure>
      <figure>
        <figcaption>Pensja: {props.workerSalary}</figcaption>
        <button>
          <img src={less} alt="less"></img>
        </button>
        <button>
          <img src={more} alt="more"></img>
        </button>
      </figure>
      <figure>
        <figcaption>Ubezpieczenie: {props.workerInsurance}</figcaption>
        <button>
          <img src={less} alt="less"></img>
        </button>
        <button>
          <img src={more} alt="more"></img>
        </button>
      </figure>
      <button>Dodaj</button>
    </div>
  );
};

export default AddWorker;
