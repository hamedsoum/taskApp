import React, { useState } from "react"
import './ExpenseForm.css'
const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setenteredAmount] = useState('');
    const [enteredDate, setenteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });
    }
    const amountChangeHandler = (event) => {
        setenteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // });
    }
    const dateChangeHandler = (event) => {
        setenteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // });
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setenteredAmount('');
        setenteredDate('');
    };
    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label >Title</label>
                <input 
                    type="text" 
                    value={enteredTitle}
                    onChange={titleChangeHandler} 
                />
            </div>
            <div className="new-expense__control">
                <label >Amount</label>
                <input 
                    type="number"
                    value={enteredAmount}
                    onChange={amountChangeHandler} 
                    min="0.01" 
                    step="0.01"
                 />
            </div>
            <div className="new-expense__control">
                <label >Date</label>
                <input 
                    value={enteredDate}
                    onChange={dateChangeHandler} 
                    type="date" 
                    min="2019-01-01" 
                    max="2022-12-31" 
                />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
};

export default ExpenseForm;