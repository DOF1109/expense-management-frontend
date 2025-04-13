import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { getExpenseByExpenseId } from "../services/expense-service";
import { useEffect, useState } from "react";
import { Expense } from "../model/Expense";
import CurrencyUtil from "../utils/CurrencyUtil";
import DateUtil from "../utils/DateUtil";

const ExpenseDetails = () => {
  const { expenseId } = useParams<{ expenseId: string }>();
  const [expense, setExpense] = useState<Expense | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (expenseId) {
      getExpenseByExpenseId(expenseId)
        .then((response) => {
          setExpense(response.data);
        })
        .catch((error) => setError(error.message))
        .finally(() => setIsLoading(false));
    }
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, my: 4 }}>
      {isLoading && <Typography>Loading...</Typography>}
      {error && <Typography color="error">{error}</Typography>}
      <Box
        sx={{ display: "flex", gap: 1, justifyContent: "end", width: "100%" }}
      >
        <Button variant="contained">Atras</Button>
        <Button variant="contained" color="warning">
          Editar
        </Button>
        <Button variant="contained" color="error">
          Eliminar
        </Button>
      </Box>

      <Paper elevation={6} sx={{ p: 3 }}>
        <Grid container spacing={2}>
          <Grid size={6} textAlign="center">
            <Typography fontWeight={600}>Nombre:</Typography>
          </Grid>
          <Grid size={6}>
            <Typography textAlign="center">{expense?.name}</Typography>
          </Grid>
          <Grid size={6} textAlign="center">
            <Typography fontWeight={600}>Categoría:</Typography>
          </Grid>
          <Grid size={6}>
            <Typography textAlign="center">{expense?.category}</Typography>
          </Grid>
          <Grid size={6} textAlign="center">
            <Typography fontWeight={600}>Monto:</Typography>
          </Grid>
          <Grid size={6}>
            <Typography textAlign="center">
              {/* Add 0 by default or the value from API */}
              {CurrencyUtil.formatToArs(expense?.amount ?? 0)}
            </Typography>
          </Grid>
          <Grid size={6} textAlign="center">
            <Typography fontWeight={600}>Fecha:</Typography>
          </Grid>
          <Grid size={6}>
            <Typography textAlign="center">
              {/* Add today's date by default or the value from API */}
              {DateUtil.getFormatedDate(expense?.date ?? new Date())}
            </Typography>
          </Grid>
          <Grid size={6} textAlign="center">
            <Typography fontWeight={600}>Nota:</Typography>
          </Grid>
          <Grid size={6}>
            <Typography textAlign="center">{expense?.note}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default ExpenseDetails;
