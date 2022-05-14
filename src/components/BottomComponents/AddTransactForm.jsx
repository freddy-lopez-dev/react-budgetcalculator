import { useState } from "react";

const AddTransactForm = (props) => {
  const [inputDescription, setDescription] = useState("");
  const [inputAmount, setAmount] = useState("");

  const addDescriptionHandler = (event) => {
    setDescription(event.target.value);
  };

  const addAmountHandler = (event) => {
    setAmount(event.target.value);
  };

  const onClickHandler = (event) => {
    // Add validation if no values entered
    props.addTransaction(inputDescription, inputAmount);
    setDescription("");
    setAmount("");
  };

  return (
    <div className="add">
      <div className="add__container">
        <input
          onChange={addDescriptionHandler}
          type="text"
          className="add__description"
          placeholder="Add description"
        />
        <input
          type="number"
          className="add__value"
          placeholder="Value"
          onChange={addAmountHandler}
        />
        <button className="add__btn" onClick={onClickHandler}>
          <i className="ion-ios-checkmark-outline"></i>
        </button>
      </div>
    </div>
  );
};

export default AddTransactForm;
