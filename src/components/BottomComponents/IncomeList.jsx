import Income from "./Income";

const IncomeList = (props) => {
  return (
    <div className="income">
      <h2 className="icome__title">Income</h2>
      <div className="income__list">
        <Income
          id="0"
          description={"Paycheck"}
          amount={250.55}
          date={"Apr. 21st, 2022"}
        />
      </div>
    </div>
  );
};

export default IncomeList;
