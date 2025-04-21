import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

interface DropdownProps {
  options: string[];
  name: string;
  label: string;
  id: string;
  value: string;
  error?: boolean;
  helperText?: string;
  onChange: (event: SelectChangeEvent) => void;
}

const Dropdown = ({
  options,
  name,
  label,
  id,
  value,
  error,
  helperText,
  onChange,
}: DropdownProps) => {

  return (
    <FormControl fullWidth error={error}>
      <InputLabel id={`${id}-label`}>{label}</InputLabel>
      <Select
        name={name}
        labelId={`${id}-label`}
        id={id}
        value={value}
        label={label}
        onChange={onChange}
      >
        {options.map((category) => (
          <MenuItem key={category} value={category}>
            {category}
          </MenuItem>
        ))}
      </Select>
      {error && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default Dropdown;
