import Income from "./Income";

const IncomeList = (props) => {
  const gains = props.listOfIncome;
  return (
    <div className="income">
      <h2 className="icome__title">Income</h2>
      <div className="income__list">
        {gains.map((gain) => {
          return (
            <Income
              key={gain.id}
              id={gain.id}
              description={gain.description}
              amount={gain.amount}
              date={gain.date}
              deleteIncome={props.deleteTransaction}
            />
          );
        })}
      </div>
    </div>
  );
};

export default IncomeList;
