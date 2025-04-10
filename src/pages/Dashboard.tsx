import { Container, Typography } from "@mui/material";
import ExpenseList from "../components/common/ExpenseList";
import useExpenses from "../hooks/useExpenses";
import DashboardStatus from "../components/layout/DashboardStatus";

const Dashboard = () => {
  const { expenses, error, isLoading } = useExpenses();

  return (
    <Container component="main">
      {isLoading && <Typography>Loading...</Typography>}
      {error && <Typography>{error}</Typography>}
      <DashboardStatus />
      <ExpenseList expenses={expenses} />
    </Container>
  );
};

export default Dashboard;
