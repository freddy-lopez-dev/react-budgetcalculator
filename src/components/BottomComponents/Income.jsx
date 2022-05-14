const Income = (props) => {
  const { id, description, amount, date, deleteIncome } = props;

  const onClickDeleteHandler = (e) => {
    const targetId = e.target.closest("div .item").dataset.transactionId;
    deleteIncome(targetId);
  };

  return (
    <div className="item" data-transaction-id={id}>
      <div className="item__description">{description}</div>
      <div className="right">
        <div className="item__value">+ ${amount}</div>
        <div className="item__delete">
          <button className="item__delete--btn" onClick={onClickDeleteHandler}>
            <i className="ion-ios-close-outline"></i>
          </button>
        </div>
      </div>
      <div className="item__date">{date}</div>
    </div>
  );
};

export default Income;
