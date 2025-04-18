import { Alert, Snackbar, SnackbarCloseReason } from "@mui/material";

interface ErrorMessageProps {
  message: string;
  showError: boolean;
  setShowError: (showError: boolean) => void;
}

const ErrorMessage = ({
  message,
  showError,
  setShowError,
}: ErrorMessageProps) => {
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setShowError(false);
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={showError}
      autoHideDuration={5000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity="error"
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default ErrorMessage;
