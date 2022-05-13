import Expense from "./Expense";

const ExpenseList = (props) => {
  return (
    <div className="expenses">
      <h2 className="expenses__title">Expenses</h2>
      <div className="expenses__list">
        <Expense />
      </div>
    </div>
  );
};

export default ExpenseList;
