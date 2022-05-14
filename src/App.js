import React, { useState } from 'react';
import { Stack, Button } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import AddBudgetModal from './components/AddBudgetModal';
// import Card from './components/Card';
import BudgetCard from './components/BudgetCard';

function App() {
  const [active, setActive] = useState('FirstCard');

  return (
    <>
      <Container className='my-4'>
        <Stack direction="horizontal" gap="2" className="mb-4">
          <h1 className="me-auto">Budgets</h1>
          <Button variant="primary">Add Budget</Button>
          <Button variant="outline-primary">Add Expense</Button>
        </Stack>
        <div 
          style={{ 
            display:"grid", 
            gridTemplateColumsn: "repeat(auto-fill, minmax(300px, 1fr",
            gap: '1rem', 
            alignItems: 'flex-start' 
          }} 
        >
          <BudgetCard 
            name="Entertainment" 
            gray 
            amount={1100} 
            max={1000} />
        </div>
      </Container>
      <AddBudgetModal show />
    </>
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
