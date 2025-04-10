import {
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Expense } from "../../model/Expense";
import DateUtil from "../../utils/DateUtil";
import CurrencyUtil from "../../utils/CurrencyUtil";

interface Props {
  expenses: Expense[];
}

const ExpenseList = ({ expenses }: Props) => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
  }));

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 330 }} aria-label="Tabala de gastos">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">
              <Typography fontWeight={600}>Gasto</Typography>
            </StyledTableCell>
            <StyledTableCell align="center">
              <Typography fontWeight={600}>Monto</Typography>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {expenses.map((expense) => {
            return (
              <TableRow key={expense.expenseId}>
                <TableCell component="th" scope="row" align="center">
                  <Typography>{expense.name}</Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ fontStyle: "italic" }}
                  >
                    {DateUtil.getFormatedDate(expense.date)}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  {CurrencyUtil.formatToArs(expense.amount)}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ExpenseList;
