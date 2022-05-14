import { Card, Stack, Button, ProgressBar } from "react-bootstrap";
// import ProgressBar from "react-bootstrap/ProgressBar";
import { currencyFormatter } from "./utils";

export default function BudgetCard({ name, amount, max, gray, onAddExpenseClick }) {

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

  return (
    <Card className={classNames.join(" ")}>
      <Card.Body >
          <Card.Title className="d-flex justify-content-between align-items-baseline">
            <h1 className="me-2">{name}</h1>
            <h2>{currencyFormatter.format(amount)} / {currencyFormatter.format(max)}</h2>
          </Card.Title>
        <ProgressBar 
            className="rounded-pill" 
            variant={getProgressBarVariant(amount, max)}
            min={0}
            max={max}
            now={amount}
        />
        <Stack direction="horizontal" gap="2" className="mt-4">
            <Button 
                variant="outline-primary" 
                className="ms-auto" 
                onClick={onAddExpenseClick}
            >
                Add Expense
            </Button>
            <Button variant="outline-secondary">View Expenses</Button>
        </Stack>
      </Card.Body>
      
    </Card>
  )
}
