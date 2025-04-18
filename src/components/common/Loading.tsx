import { CircularProgress, Modal, Paper, Typography } from "@mui/material";

const Loading = () => {
  return (
    <Modal
      open={true}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Paper
        elevation={6}
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: 1,
          justifyContent: "center",
          px: 6,
          py: 3,
        }}
      >
        <CircularProgress />
        <Typography component="p" variant="h6">
          Cargando
        </Typography>
      </Paper>
    </Modal>
  );
};

export default Loading;
