import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";

interface ConfirmDialogProps {
  title: string;
  show: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

const ConfirmDialog = ({
  title,
  show,
  onCancel,
  onConfirm,
}: ConfirmDialogProps) => {
  return (
    <Dialog
      open={show}
      onClose={onCancel}
      aria-labelledby="alert-dialog-title"
      disableEnforceFocus
      disableRestoreFocus
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogActions sx={{ justifyContent: "center", gap: 1, mb: 1 }}>
        <Button onClick={onCancel} variant="contained" color="error">
          Cancelar
        </Button>
        <Button onClick={onConfirm} variant="contained" color="success">
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
