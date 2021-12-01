import { IDateIndicators } from '../models/IDateIndicators';

export const isDateIndicatorsValid = (dateIndicators: IDateIndicators): boolean => {
  if (Number(dateIndicators.day) === 0 || Number(dateIndicators.day) > 31) return false;
  if (Number(dateIndicators.month) === 0 || Number(dateIndicators.month) > 12) return false;
  if (Number(dateIndicators.year) === 0 || Number(dateIndicators.year) < 2000) return false;
  return true;
};
