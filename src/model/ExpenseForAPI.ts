export interface ExpenseForAPI {
  id?: number;
  expenseId?: string;
  name: string;
  note: string;
  amount: number;
  date: Date;
  category: string;
}
