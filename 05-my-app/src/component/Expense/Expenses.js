import React, { useState } from 'react';

// import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import FilterExpense from './FilterExpense';
import Expenselist from './ExpenseList';
import ExpenseChart from './ExpenseChart';
const Expenses = (props) => {
  const [filteryear, setFilterYear] = useState('2020');
  const FilterExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteryear;
  });
  const filterchangehandler = selectedyear => {
    setFilterYear(selectedyear);
  }
  // let expensecontent = <p>No Expense Exist</p>;
  // if (FilterExpense.length > 0) {
  //   expensecontent = FilterExpenses.map(element => {
  //     return <ExpenseItem
  //       key={element.id}
  //       title={element.title}
  //       amount={element.amount}
  //       date={element.date}
  //     />
  //   });
  // }
  return (
    <div>
      <Card className="expenses">
        <FilterExpense selected={filteryear} onchangeFilter={filterchangehandler} />
        <Expenselist items={FilterExpenses}></Expenselist>
        <ExpenseChart expenses={FilterExpenses} />
        {/* {FilterExpenses.length === 0 ? <p>No Expense Exist.</p> : FilterExpenses.map(element => {
          return <ExpenseItem
            key={element.id}
            title={element.title}
            amount={element.amount}
            date={element.date}
          />
        })} */}
        {/* {FilterExpenses.length === 0 && <p>No Expense Exist.</p>}
        {FilterExpense.length > 0 && FilterExpenses.map(element => {
          return <ExpenseItem
            key={element.id}
            title={element.title}
            amount={element.amount}
            date={element.date}
          />
        })} */}
      </Card>
    </div>
  );
}

export default Expenses;
