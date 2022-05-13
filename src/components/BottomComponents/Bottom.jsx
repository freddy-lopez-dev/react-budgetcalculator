import ExpenseList from "./ExpenseList";
import AddTransactForm from "./AddTransactForm";
import IncomeList from "./IncomeList";

const Bottom = (props) => {
  return (
    <div className="bottom">
      <AddTransactForm />
      <div className="container">
        <IncomeList />
        <ExpenseList />
      </div>
    </div>
  );
};

export default Bottom;
