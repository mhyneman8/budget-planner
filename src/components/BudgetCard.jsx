import { currencyFormatter } from "./utils"

export default function BudgetCard({ name, amount, max }) {
  return (
    <div>
      <div className="body">
          <title>{name}</title>
          <title>{currencyFormatter.format(amount)} / {currencyFormatter.format(max)}</title>
      </div>
    </div>
  )
}
