import './Expenses.css';

const Expanses = props => {
  return (
    <section className="container expenses">
      <div>
        <li>
          <ul style={{ marginBottom: '.4rem', fontSize: '.8rem' }}>Ubezpieczenie: {props.insurance}</ul>
          <ul>Pensje: {props.salary}</ul>
          <ul>Koszty: {props.costs}</ul>
        </li>
      </div>
      <button onClick={props.payInsurance} style={{ background: '#9C27B0', gridRow: '1/2' }}></button>
      <button onClick={props.paySalaryAndCosts} style={{ background: '#F44336', gridRow: '2/3' }}></button>
    </section>
  );
};

export default Expanses;
