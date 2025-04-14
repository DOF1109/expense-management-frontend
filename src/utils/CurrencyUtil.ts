class CurrencyUtil {

  static formatToArs(value: number): string {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
    }).format(value);
  }
  
}

export default CurrencyUtil;
