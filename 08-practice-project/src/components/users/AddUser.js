import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
// import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props) => {
  const [Error, SetError] = useState();
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const adduserhandler = (event) => {
    event.preventDefault();
    const enterName = nameInputRef.current.value;
    const enterAge = ageInputRef.current.value;
    if (enterName.trim().length === 0 || enterAge.trim().length === 0) {
      SetError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enterAge < 1) {
      SetError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUsers(enterName, enterAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };
  const ErrorHandler = () => {
    SetError(null);
  };
  return (
    <div>
      {Error && (
        <ErrorModal
          title={Error.title}
          message={Error.message}
          onConfirm={ErrorHandler}
        ></ErrorModal>
      )}
      <Card className={classes.input}>
        <form onSubmit={adduserhandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef}></input>
          <label htmlFor="age">Age(year)</label>
          <input id="age" type="number" ref={ageInputRef}></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
