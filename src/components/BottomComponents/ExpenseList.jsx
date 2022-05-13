import Expense from "./Expense";

const ExpenseList = (props) => {
  return (
    <div className="expenses">
      <h2 className="expenses__title">Expenses</h2>
      <div className="expenses__list">
        <Expense
          id="1"
          description={"Pay Credit Card"}
          amount={200.0}
          percent={2}
          date={"Apr. 21st, 2022"}
        />
      </div>
    </div>
  );
};

export default ExpenseList;
