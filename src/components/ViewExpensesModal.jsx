import { useState } from 'react';
import { Modal, Button, Stack, Card } from 'react-bootstrap';
import { useBudgets, UNCATEGORIZED_BUDGET_ID } from '../contexts/BudgetsContext';
import { currencyFormatter } from './utils';

export default function ViewExpensesModal({ 
    budgetId, handleClose, editBudgetExpenses, setEditBudgetExpenses
}) {
    const { getBudgetExpenses, budgets, deleteBudget, deleteExpense } = useBudgets();
    // const [editBudget, setEditBudget] = useState(false);

    const expenses = getBudgetExpenses(budgetId);
    const budget = UNCATEGORIZED_BUDGET_ID === budgetId ? 
        { name: "Uncategorized", id: UNCATEGORIZED_BUDGET_ID } 
        : budgets.find(b => b.id === budgetId)

    return (
       
            <div>
                <Stack direction="vertical" gap="1">
                    {/* <p>{expenses.id}</p>
                    {console.log(expenses)}
                    {console.log("budgetId: " + budgetId)} */}
                    
                    {expenses.map(expense => (
                        <Stack direction="horizontal" gap="2" key={expense.id} className="mb-3">
                            <div className="me-auto fs-4">{expense.description}</div>
                            <div className="fs-5">{currencyFormatter.format(expense.amount)}</div>
                            
                            { editBudgetExpenses ? (
                                <>
                                    <Button
                                        onClick={() => deleteExpense(expense)}
                                        size="sm" varient="outline-danger"
                                    >
                                        &times;
                                    </Button>
                                </>
                            ) : null }
                        </Stack>
                    ))}
                </Stack>
                </div>
           
    )
}
