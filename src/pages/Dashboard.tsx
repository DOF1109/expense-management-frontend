import { Container, Typography } from "@mui/material";
import ExpenseList from "../components/common/ExpenseList";
import useExpenses from "../hooks/useExpenses";
import DashboardStatus from "../components/layout/DashboardStatus";
import { Expense } from "../model/Expense";
import Loading from "../components/common/Loading";
import ErrorMessage from "../components/common/ErrorMessage";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const { expenses, error, isLoading } = useExpenses();
  const [showError, setShowError] = useState<boolean>(false);
  const loggedInUser: string = "Patroclo";

  useEffect(() => {
    if (error) {
      setShowError(true);
    }
  }, [error]);

  const totalExpenses = expenses.reduce(
    (acc: number, expense: Expense) => acc + expense.amount,
    0
  );

  return (
    <Container component="main">
      {isLoading && <Loading />}
      {error && (
        <ErrorMessage
          message={error}
          showError={showError}
          setShowError={setShowError}
        />
      )}
      <DashboardStatus
        loggedInUser={loggedInUser}
        totalExpenses={totalExpenses}
      />
      <ExpenseList expenses={expenses} />
    </Container>
  );
};

export default Dashboard;
