import { useBudgets } from "../contexts/BudgetsContext"
import BudgetCard from "./BudgetCard"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

export default function TotalBarChart(props) {
    // const labelData = {budgets.map(budget => (
    //         <span>key: {budget.id} Name: {budget.name}</span>
    // ))}
    // const data = {
    //     labels: {budgets.map(budget => (
    //         <li key={budget.id}>
    //             <span>key: {budget.id} Name: {budget.name}</span>
    //         </li>
    //     ))}
    // }

    const { expenses, budgets, getBudgetExpenses } = useBudgets();
    const incomeBudget = budgets.find(({ name }) => name === "Income")
    const incomeExpenses = getBudgetExpenses(incomeBudget.id)
    const amountTotal = (expenses.reduce((total, expense) => total + expense.amount, 0))
    


    let totalExpenses = 0;
    let income = 0;

    for(let i = 0; i < incomeExpenses.length; i++) {
        income += incomeExpenses[i].amount
    }

    totalExpenses = amountTotal - income;

    // if (income === 0 ) return null
    return (
        <>
                {/* <BudgetCard name="Chart" totalExpenses={totalExpenses} hideExpenses hideButtons /> */}
            {/* {budgets.map(budget => (
                <li key={budget.id}>
                    <span>key: {budget.id} Name: {budget.name}</span>
                </li>
            ))} */}
        </>
    )
}

