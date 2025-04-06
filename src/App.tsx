import { CssBaseline } from "@mui/material";
import Dashboard from "./pages/dashboard/Dashboard";
import Appbar from "./components/Appbar";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Appbar />
      <Dashboard />
    </>
  );
};

export default App;
