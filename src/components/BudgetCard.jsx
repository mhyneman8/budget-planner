import { currencyFormatter } from "./utils"

export default function BudgetCard({ name, amount, max }) {
  return (
    <div>
      <div className="body">
          <h1>{name}</h1>
          <h2>{currencyFormatter.format(amount)} / {currencyFormatter.format(max)}</h2>
      </div>
    </div>
  )
}
