import apiClient from "../config/api-client";
import { Expense } from "../model/Expense";

export const getExpenses = async () => {
  return apiClient.get<Expense[]>("/expenses");
};
