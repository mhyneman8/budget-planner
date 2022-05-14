import React, { useState } from 'react';
import Expense from './Expense';

function Budget(props) {
    // const [budget, setBudget] = useState(() => {
    //     const saved = localStorage.getItem("budget_amount");
    //     const initialValue = JSON.parse(saved);
    //       return initialValue
    //   });
      // const [addButtonShow, setAddButtonShow] = useState(() => {
      //   if (budget =)
      // })
      const [show, setShow] = useState(false);
      const [showBudgetEdit, setShowBudgetEdit] = useState(false);
    
    const { budget, setBudget } = props;

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(budget);
        localStorage.setItem("budget_amount", budget);
        alert("budget changed to $" + budget);
        setShow(!show);
      }
    
      const addExpenseComponent = () => {
        console.log("expense button clicked");
        <Expense budget={budget} setBudget={setBudget} />
      }
    
      const updateBudget = (e) => {
        e.preventDefault();
        localStorage.setItem("budget_amount", budget);
        alert("budget changed to $" + budget);
      }
    return (
        <div>
            <header className="App-header">
            
            </header>
            <p>
            Budget Amount ${budget}
            </p>
            {show ? (
            <form onSubmit={handleSubmit}>
                <button
                onClick={() => setShow(!show)}
                >&times;</button>
                <label>Enter Budget Amount</label>
                <input type="text" value={budget} onChange={(event) => setBudget(event.target.value)}  />
                <input type="submit" value="Submit" />
            </form>
            ) : null }

            <button onClick={() => setShowBudgetEdit(!showBudgetEdit)}>
            Edit Budget
            </button>

            {showBudgetEdit ? (
            <form onSubmit={updateBudget}>
                <button
                onClick={() => setShowBudgetEdit(!showBudgetEdit)}
                >&times;</button>
                <label>Enter new Budget Amount</label>
                <input type="text" value={budget} onChange={(event) => setBudget(event.target.value)} />
                <input type="submit" value="Submit" />
            </form>
            ) : null}

            <button
            onClick={addExpenseComponent}
            >
            Add expense
            </button>

            <Expense setBudget={setBudget} budget={budget} />

      </div>
    );
}

export default Budget;