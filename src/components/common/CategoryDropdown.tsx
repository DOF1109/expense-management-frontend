import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";

interface CategoryDropdownProps {
  categories: string[];
}

const CategoryDropdown = ({ categories }: CategoryDropdownProps) => {
  const [category, setCategory] = useState<string>(categories[0]);

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="category-label">Categoría del gasto</InputLabel>
      <Select
        labelId="category-label"
        id="category"
        value={category}
        label="Categoría del gasto"
        onChange={handleChange}
      >
        {categories.map((category) => (
          <MenuItem key={category} value={category}>
            {category}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CategoryDropdown;
