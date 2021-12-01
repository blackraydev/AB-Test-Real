import { getDateIndicators } from './getDateIndicators';

export const convertDateToSendRequest = (date: string) => {
  const { day, month, year } = getDateIndicators(date);
  return `${year}-${month}-${day}`;
};
