import { useState } from 'react';
import { Card, Stack, Button, ProgressBar } from "react-bootstrap";
import { currencyFormatter } from "./utils";
import { useBudgets, UNCATEGORIZED_BUDGET_ID } from '../contexts/BudgetsContext';
import ViewExpensesModal from "./ViewExpensesModal";
// import { confirmAlert } from "react-confirm-alert";
// import 'react-confirm-alert/src/react-confirm-alert.css';

export default function BudgetCard({ 
    name, 
    onAddExpenseClick,
    hideButtons,
    budgetId,
    handleClose,
    hideExpenses,
    income,
    totalExpenses
}) {
    const { budgets, deleteBudget} = useBudgets();
    const [editBudgetExpenses, setEditBudgetExpenses] = useState(false)
    const budget = UNCATEGORIZED_BUDGET_ID === budgetId ? 
        { name: "Uncategorized", id: UNCATEGORIZED_BUDGET_ID } 
        : budgets.find(b => b.id === budgetId);


    // TODO get confirm delete to work, budget doesn't show up, but budget.id does
    // function confirmDelete(budget) {
    //     confirmAlert({
    //         title: `Confirm delete ${budget}`,
    //         message: 'Are you sure you want to delete this? ',
    //         buttons: [
    //             {
    //                 label: 'Delete',
    //                 onClick: () => {
    //                     deleteBudget(budget) 
    //                     handleClose()
    //                 }
    //             },
    //             {
    //                 label: 'Cancel',
    //                 onClick: null
    //             }
    //         ]
    //     })
    // };

  return (
    <Card className="shadow p-3 rounded">
      <Card.Body >
          <Card.Title className="d-flex justify-content-between align-items-baseline">
            <h2 className="me-2">{name}</h2>
            
            {/* Toggles between cancel and edit buttons */}
            { editBudgetExpenses ? (
                <Button
                onClick={() => setEditBudgetExpenses(!editBudgetExpenses)}
                >
                    Cancel
                </Button>
            ) : (
                <Button onClick={() => setEditBudgetExpenses(!editBudgetExpenses)}>
                    Edit
                </Button>
            )} 
          </Card.Title>

        {/* hides expenses on total card */}
        { !hideExpenses && (
            <ViewExpensesModal 
                editBudgetExpenses={editBudgetExpenses} 
                setEditBudgetExpenses={setEditBudgetExpenses} 
                budgetId={budgetId} 
            />
        )}

        {/* shows close and delete button after edit button has been clicked */}
        { editBudgetExpenses ? (
            <div className='d-flex justify-content-end'>
                <Button className='m-2'
                    onClick={() => setEditBudgetExpenses(!editBudgetExpenses)}
                >
                    Close
                </Button>
                <Button className='m-2' onClick={() => {
                    if(window.confirm('Are you sure you want to delete this category?')) {
                        deleteBudget(budget)
                        handleClose() 
                    }
                }} variant="outline-danger" >
                    Delete Category
                </Button>
            </div>
        ) : null}
        
        { name === "Total" && 
            <>
                <p className='fs-4 d-inline'>
                    {currencyFormatter.format(totalExpenses)} of {currencyFormatter.format(income)}
                </p>
                <ProgressBar 
                    className="rounded-pill" 
                    min={0}
                    max={income}
                    now={totalExpenses}
                />
            </>
        }
        
        { !hideButtons && (
            <Stack direction="horizontal" gap="2" className="mt-4">
                <Button 
                    variant="outline-primary" 
                    className="ms-auto" 
                    onClick={onAddExpenseClick}
                >
                    Add Expense
                </Button>
            </Stack> 
        )}
      </Card.Body>
      
    </Card>
  )
}
