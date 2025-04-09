import "./App.css";
import { Container, CssBaseline } from "@mui/material";
import Dashboard from "./pages/Dashboard";
import Appbar from "./components/layout/Appbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NewExpense from "./pages/NewExpense";
import ExpenseDetails from "./pages/ExpenseDetails";
import ExpenseReports from "./pages/ExpenseReports";

const App = () => {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Appbar />
        <Container>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/new" element={<NewExpense />} />
            <Route path="/details" element={<ExpenseDetails />} />
            <Route path="/reports" element={<ExpenseReports />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
};

export default App;
