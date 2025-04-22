import { useEffect, useState } from "react";
import { getExpenseByExpenseId } from "../services/expense-service";
import { Expense } from "../model/Expense";
import dayjs from "dayjs";

const useExpenseByExpenseId = (expenseId: string) => {
  const [expense, setExpense] = useState<Expense | null>(null);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getExpenseByExpenseId(expenseId)
      .then((response) => {
        // Convert the date field to a Dayjs object
        response.data.date = dayjs(response.data.date)
        setExpense(response.data);
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return { expense, error, isLoading, setError, setIsLoading };
};

export default useExpenseByExpenseId;
