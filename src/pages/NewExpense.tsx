import { Box, Button, Grid, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useFormik } from "formik";
import { Expense } from "../model/Expense";
import * as Yup from "yup";

const expenseValidationSchema = Yup.object({
  name: Yup.string().required("El nombre es requerido"),
});

const NewExpense = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      amount: 0,
      date: new Date(),
      category: "",
      note: "",
    },
    onSubmit: (values: Expense) => {
      console.log(values);
    },
    validationSchema: expenseValidationSchema,
  });

  return (
    <Box component="section">
      <Grid
        container
        component="form"
        onSubmit={formik.handleSubmit}
        spacing={2}
        sx={{ py: 3, justifyContent: "center" }}
      >
        <Grid size={{ xs: 12, sm: 9, md: 8, lg: 7 }}>
          <TextField
            name="name"
            label="Nombre del gasto"
            variant="outlined"
            fullWidth
            onChange={formik.handleChange}
            error={formik.errors.name ? true : false}
            helperText={formik.errors.name}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 9, md: 8, lg: 7 }}>
          <TextField
            name="amount"
            label="Monto del gasto"
            variant="outlined"
            fullWidth
            onChange={formik.handleChange}
            type="number"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 9, md: 8, lg: 7 }}>
          <DatePicker name="date" label="Fecha" />
        </Grid>
        <Grid size={{ xs: 12, sm: 9, md: 8, lg: 7 }}>
          <TextField
            name="category"
            label="Categoría del gasto"
            variant="outlined"
            fullWidth
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 9, md: 8, lg: 7 }}>
          <TextField
            name="note"
            label="Nota del gasto"
            variant="outlined"
            fullWidth
            onChange={formik.handleChange}
            multiline
            rows={5}
          />
        </Grid>
        <Grid
          size={{ xs: 12, sm: 9, md: 8, lg: 7 }}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Button type="submit" variant="contained">
            Guardar
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NewExpense;
