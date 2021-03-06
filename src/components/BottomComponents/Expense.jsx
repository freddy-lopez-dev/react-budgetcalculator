const Expense = (props) => {
  const { id, description, amount, date, percent } = props;

  return (
    <div className="item" data-transaction-id={id}>
      <div className="item__description">{description}</div>
      <div className="right">
        <div className="item__value">- ${amount}</div>
        <div className="item__percentage">{percent}%</div>
        <div className="item__delete">
          <button className="item__delete--btn">
            <i className="ion-ios-close-outline"></i>
          </button>
        </div>
      </div>
      <div className="item__date">{date}</div>
    </div>
  );
};

export default Expense;
