// import './App.css';
import { useState } from 'react';
import Expense from './components/Expense';


function App() {
  const [budget, setBudget] = useState(() => {
    const saved = localStorage.getItem("budget_amount");
    const initialValue = JSON.parse(saved);
    if (initialValue == null) {
      return 0
    } else {
      return initialValue
    };
  });
  // const [addButtonShow, setAddButtonShow] = useState(() => {
  //   if (budget =)
  // })
  const [show, setShow] = useState(false);
  const [showBudgetEdit, setShowBudgetEdit] = useState(false);

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
    <div className="App">
      <header className="App-header">
        
      </header>
      <button
        onClick={() => setShow(!show)}
      >Add Budget</button>
    
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

      <p>
        Budget Amount ${budget}
      </p>

      <button onClick={() => setShowBudgetEdit(!showBudgetEdit)}>
        Edit Budget
      </button>

      {showBudgetEdit ? (
        <form onSubmit={handleSubmit}>
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

export default App;
