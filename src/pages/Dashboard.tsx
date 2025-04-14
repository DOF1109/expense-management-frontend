import { Container, Typography } from "@mui/material";
import ExpenseList from "../components/common/ExpenseList";
import useExpenses from "../hooks/useExpenses";
import DashboardStatus from "../components/layout/DashboardStatus";
import { Expense } from "../model/Expense";

const Dashboard = () => {
  const { expenses, error, isLoading } = useExpenses();
  const loggedInUser: string = "Patroclo";
  const totalExpenses = expenses.reduce(
    (acc: number, expense: Expense) => acc + expense.amount,
    0
  );

  return (
    <Container component="main">
      {isLoading && <Typography>Loading...</Typography>}
      {error && <Typography>{error}</Typography>}
      <DashboardStatus
        loggedInUser={loggedInUser}
        totalExpenses={totalExpenses}
      />
      <ExpenseList expenses={expenses} />
    </Container>
  );
};

export default Dashboard;
