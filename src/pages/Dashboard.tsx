import { Container, Typography } from "@mui/material";
import ExpenseList from "../components/common/ExpenseList";
import useExpenses from "../hooks/useExpenses";

const Dashboard = () => {
  const { expenses, error, isLoading } = useExpenses();

  return (
    <Container component="main">
      {isLoading && <Typography>Loading...</Typography>}
      {error && <Typography>{error}</Typography>}
      <ExpenseList expenses={expenses} />
    </Container>
  );
};

export default Dashboard;
