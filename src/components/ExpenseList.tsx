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
import { Expense } from "../model/Expense";

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
      <Table sx={{ minWidth: 650 }} aria-label="Expenses table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">
              <Typography fontWeight={600}>Expense</Typography>
            </StyledTableCell>
            <StyledTableCell align="center">
              <Typography fontWeight={600}>Amount</Typography>
            </StyledTableCell>
            <StyledTableCell align="center">
              <Typography fontWeight={600}>Date</Typography>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {expenses.map((expense) => {
            return (
              <TableRow key={expense.expenseId}>
                <TableCell component="th" scope="row" align="center">
                  {expense.name}
                </TableCell>
                <TableCell align="center">$ {expense.amount}</TableCell>
                <TableCell align="center">{expense.date}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ExpenseList;
