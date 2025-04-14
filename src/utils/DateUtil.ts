class DateUtil {

  static getFormatedDate(date: Date | string): string {
    const validDate = typeof date === "string" ? new Date(date) : date;

    return new Intl.DateTimeFormat("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(validDate);
  }
  
}

export default DateUtil;
