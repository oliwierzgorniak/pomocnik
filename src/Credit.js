const Credit = props => {
  return (
    <section className="container" style={{ background: '#08B7CA' }}>
      <li>
        <ul>Kredyt 1: {props.credit1}</ul>
        <ul>Kredyt 2: {props.credit2}</ul>
      </li>
    </section>
  );
};

export default Credit;
