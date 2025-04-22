import { useEffect, useState } from "react";
import { Expense } from "../model/Expense";
import { getExpenses } from "../services/expense-service";
import dayjs from "dayjs";

const useExpenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getExpenses()
      .then((response) => {
        response.data.forEach((expense) => {
          // Convert the date field to a Dayjs object
          expense.date = dayjs(expense.date);
        });
        setExpenses(response.data);
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  return { expenses, error, isLoading };
};

export default useExpenses;
