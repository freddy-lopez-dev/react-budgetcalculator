import BudgetExpense from "./BudgetExpense";
import BudgetIncome from "./BudgetIncome";
import BudgetTitle from "./BudgetTitle";
import BudgetTotal from "./BudgetTotal";

const Top = (props) => {
  return (
    <div className="top">
      <div className="budget">
        <BudgetTitle />
        <BudgetTotal />
        <BudgetIncome />
        <BudgetExpense />
      </div>
    </div>
  );
};

export default Top;
