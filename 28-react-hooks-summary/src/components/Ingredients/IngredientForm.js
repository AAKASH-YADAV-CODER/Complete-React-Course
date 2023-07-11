import React, { useState } from "react";

import Card from "../UI/Card";
import classes from "./IngredientForm.module.css";
import LoadingIndicator from "../UI/LoadingIndicator";

const IngredientForm = React.memo((props) => {
  const [enterTitle, setenterTitle] = useState("");
  const [enterAmount, setenterAmount] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    const userData = {
      title: enterTitle,
      amount: enterAmount,
    };
    props.onAddingredient(userData);
  };

  return (
    <section className={classes.ingredient}>
      <Card>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={enterTitle}
              onChange={(e) => {
                setenterTitle(e.target.value);
              }}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={enterAmount}
              onChange={(e) => {
                setenterAmount(e.target.value);
              }}
            />
          </div>
          <div className={classes.ingredient_actions}>
            <button type="submit">Add Ingredient</button>
            {props.onLoading && <LoadingIndicator />}
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
