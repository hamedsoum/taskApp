import React, {useState} from 'react';
import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
function Expenses(props){
  const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedYear =>{
      console.log('expense js');
      setFilteredYear(selectedYear);
    }
    const fileredExpenses = props.items.filter( expense => {
      return expense.date.getFullYear().toString() ===filteredYear;
    });
    return (
      <div>
     <Card className="expenses">
       <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
       <ExpensesChart expenses={fileredExpenses} />
       <ExpensesList items={fileredExpenses}/>
    </Card>
    </div>
    )
};

export default Expenses;