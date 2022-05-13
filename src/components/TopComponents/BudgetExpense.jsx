const BudgetExpense = (props) => {
  const { amount, percentage } = props;
  return (
    <div className="budget__expenses">
      <div className="budget__expenses--text">Expenses</div>
      <div className="right">
        <div className="budget__expenses--value">- ${amount}</div>
        <div className="budget__expenses--percentage">{percentage}%</div>
      </div>
    </div>
  );
};

export default BudgetExpense;
