import apiClient from "../config/api-client";
import { Expense } from "../model/Expense";

export const getExpenses = async () => {
  return apiClient.get<Expense[]>("/expenses");
};

export const getExpenseByExpenseId = async (expenseId: string) => {
  return apiClient.get<Expense>(`/expenses/${expenseId}`);
};

export const deleteExpenseByExpenseId = async (expenseId: string) => {
  return apiClient.delete<void>(`/expenses/${expenseId}`);
};
