import ExpenseList from "./ExpenseList";
import Form from "./Form";
import IncomeList from "./IncomeList";

const Bottom = (props) => {
  return (
    <div className="bottom">
      <Form />
      <div className="container">
        <IncomeList />
        <ExpenseList />
      </div>
    </div>
  );
};

export default Bottom;
