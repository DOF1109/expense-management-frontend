import { Box, Button, Grid, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useFormik } from "formik";
import { Expense } from "../model/Expense";
import expenseValidationSchema from "../validation/expenseValidationSchema";
import dayjs from "dayjs";

const NewExpense = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      amount: 0,
      date: dayjs(),
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
            error={formik.errors.amount ? true : false}
            helperText={formik.errors.amount}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 9, md: 8, lg: 7 }}>
          <DatePicker
            label="Fecha"
            disableFuture
            value={formik.values.date}
            onChange={(value) => formik.setFieldValue("date", value)}
            slotProps={{
              textField: {
                name: "date",
                fullWidth: true,
                error: formik.errors.date ? true : false,
                helperText: typeof formik.errors.date === "string" ? formik.errors.date : undefined,
              },
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 9, md: 8, lg: 7 }}>
          <TextField
            name="category"
            label="Categoría del gasto"
            variant="outlined"
            fullWidth
            onChange={formik.handleChange}
            error={formik.errors.category ? true : false}
            helperText={formik.errors.category}
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
            error={formik.errors.note ? true : false}
            helperText={formik.errors.note}
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
