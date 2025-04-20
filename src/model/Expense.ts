import { Dayjs } from "dayjs";

export interface Expense {
  id?: number;
  expenseId?: string;
  name: string;
  note: string;
  amount: number;
  date: Dayjs;
  category: string;
}
