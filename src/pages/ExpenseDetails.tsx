import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import CurrencyUtil from "../utils/CurrencyUtil";
import DateUtil from "../utils/DateUtil";
import useExpenseByExpenseId from "../hooks/useExpenseByExpenseId";
import ConfirmDialog from "../components/common/ConfirmDialog";

const ExpenseDetails = () => {
  const { expenseId } = useParams<{ expenseId: string }>();
  if (!expenseId) {
    return (
      <Typography color="error" textAlign="center" my={3}>
        Invalid expense ID
      </Typography>
    );
  }

  const { expense, error, isLoading } = useExpenseByExpenseId(expenseId);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, my: 4 }}>
      {isLoading && <Typography>Loading...</Typography>}
      {error && <Typography color="error">{error}</Typography>}
      <Box
        sx={{ display: "flex", gap: 1, justifyContent: "end", width: "100%" }}
      >
        <Button variant="contained">
          <Link className="blank-link" to="/">
            Atras
          </Link>
        </Button>
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
            <Typography textAlign="center">
              {expense ? expense.name : "No disponible"}
            </Typography>
          </Grid>
          <Grid size={6} textAlign="center">
            <Typography fontWeight={600}>Categoría:</Typography>
          </Grid>
          <Grid size={6}>
            <Typography textAlign="center">
              {expense ? expense.category : "No disponible"}
            </Typography>
          </Grid>
          <Grid size={6} textAlign="center">
            <Typography fontWeight={600}>Monto:</Typography>
          </Grid>
          <Grid size={6}>
            <Typography textAlign="center">
              {expense
                ? CurrencyUtil.formatToArs(expense.amount)
                : "No disponible"}
            </Typography>
          </Grid>
          <Grid size={6} textAlign="center">
            <Typography fontWeight={600}>Fecha:</Typography>
          </Grid>
          <Grid size={6}>
            <Typography textAlign="center">
              {expense
                ? DateUtil.getFormatedDate(expense.date)
                : "No disponible"}
            </Typography>
          </Grid>
          <Grid size={6} textAlign="center">
            <Typography fontWeight={600}>Nota:</Typography>
          </Grid>
          <Grid size={6}>
            <Typography textAlign="center">
              {expense ? expense.note : "No disponible"}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <ConfirmDialog title="Confirmar eliminación" message="Seguro que desea eliminar el gasto?" show={true} />
    </Box>
  );
};

export default ExpenseDetails;
