import { Box, Typography } from "@mui/material";
import DateUtil from "../../utils/DateUtil";
import CurrencyUtil from "../../utils/CurrencyUtil";

interface Props {
  loggedInUser: string;
  totalExpenses: number;
}

const DashboardStatus = ({ loggedInUser, totalExpenses }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mt: 3,
        mb: 3,
      }}
    >
      <Typography>
        Hola{" "}
        <Typography component="span" color="primary" fontWeight={600}>
          {loggedInUser}
        </Typography>
        !
      </Typography>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography component="h1" variant="h6" fontWeight={600}>
          Gastos del mes
        </Typography>
        <Typography variant="h6">
          {CurrencyUtil.formatToArs(totalExpenses)}
        </Typography>
      </Box>
      <Typography>{DateUtil.getFormatedDate(new Date())}</Typography>
    </Box>
  );
};

export default DashboardStatus;
