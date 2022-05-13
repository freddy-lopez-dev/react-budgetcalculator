import Income from "./Income";

const IncomeList = (props) => {
  return (
    <div className="income">
      <h2 className="icome__title">Income</h2>
      <div className="income__list">
        <Income />
      </div>
    </div>
  );
};

export default IncomeList;
