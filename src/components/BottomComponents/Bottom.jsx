import ExpenseList from "./ExpenseList";
import AddTransactForm from "./AddTransactForm";
import IncomeList from "./IncomeList";
import { useState } from "react";

const Bottom = (props) => {
  const dateToday = new Date();
  const formatDate = dateToday.toLocaleDateString("en-CA");
  const initialTransactionList = [
    {
      id: 0,
      description: "My salary",
      amount: 3000.0,
      date: formatDate,
    },
    {
      id: 2,
      description: "Credit Card payment",
      amount: -200.0,
      date: formatDate,
    },
  ];

  const [transactionList, setTransactionList] = useState(
    initialTransactionList
  );

  const addTransactionHandler = (description, amount) => {
    setTransactionList((prevState) => {
      const id = prevState.length * Math.floor(Math.random() * 1000);
      return [
        {
          id: id,
          description: description,
          amount: amount,
          date: formatDate,
        },
        ...prevState,
      ];
    });
  };

  const deleteTransactionHandler = (id) => {
    setTransactionList((prevState) => {
      return prevState.filter((transaction) => transaction.id !== +id);
    });
  };

  const incomes = transactionList.filter((transaction) => {
    return transaction.amount >= 0;
  });

  return (
    <div className="bottom">
      <AddTransactForm addTransaction={addTransactionHandler} />
      <div className="container">
        <IncomeList
          listOfIncome={incomes}
          deleteTransaction={deleteTransactionHandler}
        />
        <ExpenseList />
      </div>
    </div>
  );
};

export default Bottom;
