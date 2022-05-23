import { useBudgets, } from "../contexts/BudgetsContext"
import BudgetCard from "./BudgetCard"

export default function TotalBudgetCard(props) {
    const { expenses, budgets, getBudgetExpenses } = useBudgets();
    const incomeBudget = budgets && budgets.find(({ name }) => name === "Income" || name === "income")
    const incomeExpenses = incomeBudget ? getBudgetExpenses(incomeBudget.id) : [];
    const amountTotal = (expenses.reduce((total, expense) => total + expense.amount, 0))
    
    let totalExpenses = 0;
    let income = 0;

    for(let i = 0; i < incomeExpenses.length; i++) {
        income += incomeExpenses[i].amount
    }

    totalExpenses = amountTotal - income;

    if (income === 0 ) return null
    return (
        <BudgetCard name="Total" income={income} totalExpenses={totalExpenses} hideExpenses hideButtons />
    )
}

