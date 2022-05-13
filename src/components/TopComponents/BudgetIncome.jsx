const BudgetIncome = (props) => {
  const { amount } = props;
  return (
    <div className="budget__income">
      <div className="budget__income--text">Income</div>
      <div className="right">
        <div className="budget__income--value">+ ${amount}</div>
        <div className="budget__income--percentage">&nbsp;</div>
      </div>
    </div>
  );
};

export default BudgetIncome;
