export const convertToDate = (value: string): string => {
  const date: Date = new Date(value);

  let days: string = date.getDate().toString();
  let month: string = (date.getMonth() + 1).toString();
  let years: number = date.getFullYear();

  if (days.length === 1) days = '0' + days;
  if (month.length === 1) month = '0' + month;

  return `${days}.${month}.${years}`;
};
