const addSpace = (value: string) => value.replace(/\d{4}(?=.)/g, "$& ");
const removeNonNumeric = (value: string) => value.replace(/[^0-9]/g, "");

export const formatToCardNumber = (value: string) =>
  addSpace(removeNonNumeric(value)).substring(0, 19);
