import { useState } from 'react';
import { Card, Stack, Button, ProgressBar } from "react-bootstrap";
import { currencyFormatter } from "./utils";
import { useBudgets, UNCATEGORIZED_BUDGET_ID } from '../contexts/BudgetsContext';
import ViewExpensesModal from "./ViewExpensesModal";
// import { confirmAlert } from "react-confirm-alert";
// import 'react-confirm-alert/src/react-confirm-alert.css';

export default function BudgetCard({ 
    name, 
    amount, 
    max, 
    gray, 
    onAddExpenseClick,
    hideButtons,
    onViewExpensesClick,
    budgetId,
    handleClose
}) {
    const { getBudgetExpenses, budgets, deleteBudget, deleteExpense } = useBudgets();
    const [editBudgetExpenses, setEditBudgetExpenses] = useState(false)
    const budget = UNCATEGORIZED_BUDGET_ID === budgetId ? 
        { name: "Uncategorized", id: UNCATEGORIZED_BUDGET_ID } 
        : budgets.find(b => b.id === budgetId)

    const classNames = [];
    if (amount > max) {
        classNames.push("bg-danger", "bg-opacity-10");
    } else if (gray) {
        classNames.push("bg-light");
    }

    function getProgressBarVariant(amount, max) {
        const ratio = amount / max;
        if (ratio < 0.5) return "primary";
        if (ratio < 0.75) return "warning";
        return "danger"
    }

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
    <Card className={classNames.join(" ")}>
      <Card.Body >
          <Card.Title className="d-flex justify-content-between align-items-baseline">
            <h1 className="me-2">{name}</h1>
            <h2>{currencyFormatter.format(amount)}
            <Button onClick={() => setEditBudgetExpenses(!editBudgetExpenses)}>Edit</Button>
                {/* {max && <span> / {currencyFormatter.format(max)}</span>}  */}
                { editBudgetExpenses ? (
                    <Button onClick={() => {
                        if(window.confirm('Are you sure you want to delete this category?')) {
                            deleteBudget(budget)
                            handleClose() 
                        }
                        // confirmDelete(budget)
                        
                    }} variant="outline-danger" >
                        Delete
                    </Button>
                ) : null}
                
            </h2>
          </Card.Title>

          <ViewExpensesModal editBudgetExpenses={editBudgetExpenses} setEditBudgetExpenses={setEditBudgetExpenses} budgetId={budgetId} />
        { editBudgetExpenses ? (
            <Button
                onClick={() => setEditBudgetExpenses(!editBudgetExpenses)}
            >
                Save
            </Button>
        ) : null}
        
        
        {max && 
            <ProgressBar 
                className="rounded-pill" 
                variant={getProgressBarVariant(amount, max)}
                min={0}
                max={max}
                now={amount}
            />
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
                <Button
                    onClick={onViewExpensesClick}
                    variant="outline-secondary"
                >
                    View Expenses
                </Button>
            </Stack> 
        )}
      </Card.Body>
      
    </Card>
  )
}
