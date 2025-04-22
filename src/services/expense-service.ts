import apiClient from "../config/api-client";
import { Expense } from "../model/Expense";
import ExpenseUtil from "../utils/ExpenseUtil";

export const getExpenses = async () => {
  return apiClient.get<Expense[]>("/expenses");
};

export const getExpenseByExpenseId = async (expenseId: string) => {
  return apiClient.get<Expense>(`/expenses/${expenseId}`);
};

export const deleteExpenseByExpenseId = async (expenseId: string) => {
  return apiClient.delete<void>(`/expenses/${expenseId}`);
};

export const saveExpense = async (expense: Expense) => {
  const expenseToSend = ExpenseUtil.mapExpenseToExpenseForAPI(expense)
  return apiClient.post<Expense>("/expenses", expenseToSend)
}
