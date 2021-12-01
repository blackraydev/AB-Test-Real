import { IDateIndicators } from '../models/IDateIndicators';

export const getDateIndicators = (date: string): IDateIndicators => {
  if (date.length !== 10) throw new Error('Invalid Date Indicators');

  const dateIndicators = date.split('.');

  const day = dateIndicators[0];
  const month = dateIndicators[1];
  const year = dateIndicators[2];

  return { day, month, year };
};
