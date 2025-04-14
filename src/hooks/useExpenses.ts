import { useEffect, useState } from "react";
import { Expense } from "../model/Expense";
import { getExpenses } from "../services/expense-service";

const useExpenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getExpenses()
      .then((response) => {
        setExpenses(response.data);
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  return { expenses, error, isLoading };
};

export default useExpenses;
