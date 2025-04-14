import { useEffect, useState } from "react";
import { getExpenseByExpenseId } from "../services/expense-service";
import { Expense } from "../model/Expense";

const useExpenseByExpenseId = (expenseId: string) => {
  const [expense, setExpense] = useState<Expense | null>(null);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getExpenseByExpenseId(expenseId)
      .then((response) => {
        setExpense(response.data);
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return { expense, error, isLoading };
};

export default useExpenseByExpenseId;
