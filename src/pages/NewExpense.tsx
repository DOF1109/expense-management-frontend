import { Box, Button, Grid, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useFormik } from "formik";
import { Expense } from "../model/Expense";
import expenseValidationSchema from "../validation/expenseValidationSchema";
import dayjs from "dayjs";
import Dropdown from "../components/common/Dropdown";
import { expenseCategories } from "../utils/AppConstants";
import { useEffect, useState } from "react";
import { saveExpense } from "../services/expense-service";
import ErrorMessage from "../components/common/ErrorMessage";
import { useNavigate } from "react-router-dom";

const NewExpense = () => {
  const [showError, setShowError] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      setShowError(true);
    }
  }, [error]);

  const formik = useFormik({
    initialValues: {
      name: "",
      amount: 0,
      date: dayjs(),
      category: "",
      note: "",
    },
    onSubmit: (values: Expense) => {
      saveExpense(values)
        .then((response) => {
          if (response.status === 201) {
            navigate("/");
          }
        })
        .catch((error) => {
          setShowError(true);
          setError(error.message);
        });
    },
    validationSchema: expenseValidationSchema,
  });

  return (
    <Box component="section">
      {error && (
        <ErrorMessage
          message={error}
          showError={showError}
          setShowError={setShowError}
        />
      )}
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
            type="number"
            onChange={formik.handleChange}
            value={formik.values.amount}
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
                helperText:
                  typeof formik.errors.date === "string"
                    ? formik.errors.date
                    : undefined,
              },
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 9, md: 8, lg: 7 }}>
          <Dropdown
            options={expenseCategories}
            name="category"
            label="Categoría del gasto"
            id="category"
            value={formik.values.category}
            error={formik.errors.category ? true : false}
            helperText={formik.errors.category}
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
