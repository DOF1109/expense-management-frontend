import { Avatar } from "@mui/material";
import logo from "../assets/logo.png";

const Logo = () => {
  return (
    <Avatar
      src={logo}
      alt="Logo"
      sx={{ width: { xs: 38, md: 48 }, height: { xs: 38, md: 48 } }}
    />
  );
};

export default Logo;
