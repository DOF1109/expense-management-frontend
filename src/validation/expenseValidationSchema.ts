import { isDayjs } from "dayjs";
import * as Yup from "yup";

const expenseValidationSchema = Yup.object({
  name: Yup.string()
    .trim()
    .required("El nombre es requerido")
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .max(50, "El nombre no puede tener más de 50 caracteres"),
  amount: Yup.number()
    .required("El monto es requerido")
    .positive("El monto debe ser un número positivo"),
  date: Yup.mixed()
    .test("is-dayjs", "La fecha no es válida", (value) => isDayjs(value))
    .required("La fecha es requerida"),
  category: Yup.string()
    .trim()
    .required("La categoría es requerida")
    .min(3, "La categoría debe tener al menos 3 caracteres")
    .max(50, "La categoría no puede tener más de 50 caracteres"),
  note: Yup.string()
    .trim()
    .max(200, "La nota no puede tener más de 200 caracteres"),
});

export default expenseValidationSchema