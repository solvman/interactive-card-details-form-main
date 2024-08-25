const addSpace = (value: string) => value.replace(/\B(?=(\d{4})+(?!\d))/g, ",");
const removeNonNumeric = (value: string) => value.replace(/[^0-9]/g, "");

export const formatToCardNumber = (value: string) =>
  addSpace(removeNonNumeric(value));
