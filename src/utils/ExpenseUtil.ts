import { Expense } from "../model/Expense";
import ExpenseForAPI from "../model/ExpenseForAPI";

class ExpenseUtil {

  static mapExpenseToExpenseForAPI(expense: Expense): ExpenseForAPI {
    return {
      ...expense,
      date: expense.date.toDate(), // Convert Dayjs object to Date
    };
  }

}

export default ExpenseUtil;