import { useState } from 'react';
import { Stack, Button, Container } from 'react-bootstrap'
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from './contexts/BudgetsContext';

// Components
import AddBudgetModal from './components/AddBudgetModal';
import AddExpenseModal from './components/AddExpenseModal';
import BudgetCard from './components/BudgetCard';
import TotalBudgetCard from './components/TotalBudgetCard';
import TotalBarChart from './components/TotalBarChart';
import ViewExpensesModal from './components/ViewExpensesModal';
import UncategorizedBudgetCard from './components/UncategorizedBudgetCard';


function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
  const [viewExpensesModalBudgetId, setViewExpensesModalBudgetId] = useState();
  const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState();

  const { budgets, getBudgetExpenses } = useBudgets();


  function openAddExpenseModal(budgetId) {
    setShowAddExpenseModal(true);
    setAddExpenseModalBudgetId(budgetId)
  }

  return (

    <>
      <Container className='my-4'>
        <Stack direction="horizontal" gap="2" className="mb-4">
          <Button variant="primary" onClick={() => setShowAddBudgetModal(true)} >
            Add new category
          </Button>
          {/* <Button variant="outline-primary" onClick={openAddExpenseModal} >
            Add Expense
          </Button> */}
        </Stack>
        <div 
          style={{ 
            display:"grid", 
            gridTemplateColumns: "repeat(auto-fill, minmax(342px, 1fr))",
            gap: '2rem', 
            alignItems: 'flex-start' 
          }} 
        >
          {budgets.map(budget => {
            // const amount = getBudgetExpenses(budget.id).reduce((total, expense) => total + expense.amount, 0)
            return (
              <BudgetCard 
                key={budget.id}
                name={budget.name} 
                // amount={amount} 
                max={budget.max} 
                onAddExpenseClick={() => openAddExpenseModal(budget.id)}
                onViewExpensesClick={() => setViewExpensesModalBudgetId(budget.id)}
                budgetId={budget.id}
                handleClose={() => setShowAddBudgetModal(false)}
              /> 
            )   
          })}
          <TotalBudgetCard  />
          <TotalBarChart />
        </div>
      </Container>
      <AddBudgetModal 
        show={showAddBudgetModal} 
        handleClose={() => setShowAddBudgetModal(false)} 
      />
      <AddExpenseModal 
        defaultBudgetId={addExpenseModalBudgetId}
        show={showAddExpenseModal} 
        handleClose={() => setShowAddExpenseModal(false)} 
      />
      
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
