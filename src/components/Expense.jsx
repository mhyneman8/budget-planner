import React, { useState } from 'react';


export default function Expense(props) {
    const defaultSelectValue = "Select a category"

    const [selected, setSelected] = useState(defaultSelectValue);
    const [expenseAmount, setExpenseAmount] = useState(0);

    const updateBudget = (e) => {
        e.preventDefault();
        console.log("test");
        if (selected === "income") {
            props.setBudget(Number(props.budget) + Number(expenseAmount) )
        } else {
            props.setBudget(Number(props.budget) - Number(expenseAmount) )
        }
    }

    return (
    <div>
        Expense
        <form onSubmit={updateBudget}>
            <select defaultValue={selected} onChange={(e) => setSelected(e.target.value)} >
                <option>{defaultSelectValue}</option>
                <option value="car">Car</option>
                <option value="house">Household</option>
                <option value="bills">Bills</option>
                <option value="savings">Savings</option>
                <option value="income">Income</option>
            </select>
            <input type="text" value={expenseAmount} onChange={(e) => setExpenseAmount(e.target.value)} />
            <input type="submit" value="Submit" />
        </form>
        <h2>{selected}</h2>
    </div>
    )
}
