import React from "react";

import Chart from "../Chart/Chart";

const ExpensesChart = props =>{

    const chartDataPoints = [
        {label : 'Jan', value : 0},
        {label : 'Feb', value : 0},
        {label : 'Mars', value : 0},
        {label : 'Apr', value : 0},
        {label : 'May', value : 0},
        {label : 'jun', value : 0},
        {label : 'jul', value : 0},
        {label : 'Aug', value : 0},
        {label : 'Sep', value : 0},
        {label : 'Oct', value : 0},
        {label : 'Nov', value : 0},
        {label : 'dEC', value : 0}

    ];
console.log(props);
    for (const expense of props.expenses){
        const expenseMonth = expense.date.getMonth();
        chartDataPoints[expenseMonth].value += expense.amount;
    }
    return <Chart dataPoints = {chartDataPoints}/>
};

export default ExpensesChart;