import ExpenseList from "../../components/ExpenseList";
import { Expense } from "../../model/Expense";

const Dashboard = () => {
  const expenses: Expense[] = [
    {
      id: 1,
      name: "Water bill",
      amount: 200.0,
      date: new Date().toDateString(),
      category: "Utilities",
      note: "Monthly water bill",
    },
    {
      id: 2,
      name: "Electricity bill",
      amount: 150.0,
      date: new Date().toDateString(),
      category: "Utilities",
      note: "Monthly water bill",
    },
    {
      id: 3,
      name: "Wifi and TV bill",
      amount: 50.0,
      date: new Date().toDateString(),
      category: "Utilities",
      note: "Monthly water bill",
    },
  ];

  return (
    <>
      <ExpenseList expenses={expenses} />
    </>
  );
};

export default Dashboard;
