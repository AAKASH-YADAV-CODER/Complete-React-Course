import React, { useState } from 'react';
import AddExpense from './component/AddExpense/AddExpense';
import Expenses from './component/Expense/Expenses';
const Dum_ExPense = [
  {
    id: 'e1',
    title: 'petrol',
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2020, 2, 12) },
  {
    id: 'e3',
    title: 'Gwgon',
    amount: 294.67,
    date: new Date(2023, 2, 28),
  },
  {
    id: 'e4',
    title: 'Fortuner',
    amount: 450,
    date: new Date(2023, 5, 12),
  },
];
const App = () => {
  const [expenses, setexpenses] = useState(Dum_ExPense);
  const addExpenseHandler = expense => {
    setexpenses(prvExp => {
      return [expense, ...prvExp];
    })
  };
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <h2>Let's get started!</h2>
      <AddExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
