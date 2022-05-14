import React, { useState } from 'react';
// import Card from './components/Card';
import BudgetCard from './components/BudgetCard';

function App() {
  const [active, setActive] = useState('FirstCard');

  return (
    <div className='my-4'>
      <nav>
        <h1>Budgets</h1>
        <button>Add Budget</button>
        <button>Add Expense</button>
      </nav>
      <div style={{ display:"grid", gridTemplateColumsn: "repeat(auto-fill, minmax(300px, 1fr", gap: '1rem', alignItems: 'flex-start' }} >
        <BudgetCard name="Entertainment" amount={200} max={1000} />
      </div>

    </div>
  )
}

export default App




// // import './App.css';
// import { useState } from 'react';
// // import Expense from './components/Expense';
// import Budget from './components/Budget';


// function App() {
// const [budget, setBudget] = useState(() => {
//   const saved = localStorage.getItem("budget_amount");
//   const initialValue = JSON.parse(saved);
//     return initialValue
// });
// const [showBudgetComponent, setShowBudgetComponent] = useState(false)

// const handleSubmit = (e) => {
//   e.preventDefault();
//   console.log(budget);
//   localStorage.setItem("budget_amount", budget);
//   alert("budget changed to $" + budget);
//   setShow(!show);
// }

// // const addBudgetComponent = () => {
// //   { <Budget budget={budget} setBudget={setBudget} /> }
// // }

//   if (localStorage.getItem("budget_amount") == null) {
//     return (
//       <div>
//         <button
//           onClick={() => setShowBudgetComponent(!showBudgetComponent)}
//         >
//           Add Budget
//         </button>
//         {
//           showBudgetComponent ? (
//             <Budget budget={budget} setBudget={setBudget} />
//           ) : null
//         }
//       </div>
//     )
//   } else {
//     return (
//       <Budget budget={budget} setBudget={setBudget} />
//     );
//   }
// }

// export default App;
