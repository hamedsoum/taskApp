import ExpensesFilter from './components/ExpensesFilter/ExpensesFilter';
import Expenses from './components/Expenses/Expenses';
import React, { useState } from "react"
import NewExpense from './components/NewExpenses/NewExpense';
function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [newExpenses, setExpenses] = useState([]);
  const addExpenseHandler = expense =>{
    console.log('in App.js');
    console.log(expense);
  }
  const filterByExpenseYear = expenseYear => {
    console.log('in App.js');
    console.log(expenseYear);
    let newExpensesTab = expenses.filter(expense => expense.date.getFullYear() == expenseYear);
    // console.log(newExpensesTab);
    setExpenses(newExpensesTab);
    console.log(newExpenses);
    // expenses = newExpenses;
    // setExpenses(expenses.filter(expense => expense.date.getFullYear() == expenseYear));
   
  }
  return (
    <div>
      <ExpensesFilter onFilterByExpenseYear={filterByExpenseYear} />
        <NewExpense onAddExpense={addExpenseHandler} />
         <Expenses items = {expenses} />

    </div>
  );
}

export default App;
