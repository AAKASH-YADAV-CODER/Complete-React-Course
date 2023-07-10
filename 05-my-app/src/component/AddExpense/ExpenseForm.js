import React, { useState } from "react";
import './ExpenseForm.css';
const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setuserInput] = useState({
    //     enteredAmount: '',
    //     enteredDate: '',
    //     enteredTitle: '',
    // });
    const titlechangehandler = (event) => {
        setEnteredTitle(event.target.value);
        // setuserInput({ ...userInput, enteredTitle: event.target.value });
        // setuserInput((prevstate) => { return { ...prevstate, enteredTitle: event.target.value } });
    };
    const datechangehandler = (e) => {
        setEnteredDate(e.target.value);
        // setuserInput({ ...userInput, enteredDate: e.target.value });
        // setuserInput((prevstate) => { return { ...prevstate, enteredDate: e.target.value } });
    };
    const amountchangehandler = (e) => {
        setEnteredAmount(e.target.value);
        // setuserInput({ ...userInput, enteredAmount: e.target.value });
        // setuserInput((prevstate) => { return { ...prevstate, enteredAmount: e.target.value } });
    };
    const submitHandler = (e) => {
        e.preventDefault();
        const ExpenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        };
        props.onSaveExpenseData(ExpenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titlechangehandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} min='0.01' step='0.01' onChange={amountchangehandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={enteredDate} min='2019-01-01' max='2023-12-31' onChange={datechangehandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};
export default ExpenseForm;
