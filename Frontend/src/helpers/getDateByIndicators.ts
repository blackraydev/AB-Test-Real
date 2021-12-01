import { IDateIndicators } from '../models/IDateIndicators';

export const getDateByIndicators = (dateIndicators: IDateIndicators): Date => {
  const date = new Date();

  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  date.setDate(Number(dateIndicators.day));
  date.setMonth(Number(dateIndicators.month) - 1);
  date.setFullYear(Number(dateIndicators.year));

  return date;
};
