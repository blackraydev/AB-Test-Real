import { IDateIndicators } from '../models/IDateIndicators';
import { getDateByIndicators } from './getDateByIndicators';
import { isDateIndicatorsValid } from './isDateIndicatorsValid';

export const isDateValid = (
  registrationDateIndicators?: IDateIndicators,
  lastActivityDateIndicators?: IDateIndicators
): boolean => {
  let date;

  if (registrationDateIndicators && isDateIndicatorsValid(registrationDateIndicators)) {
    date = getDateByIndicators(registrationDateIndicators);
  } else if (lastActivityDateIndicators && isDateIndicatorsValid(lastActivityDateIndicators)) {
    date = getDateByIndicators(lastActivityDateIndicators);
  } else if (
    (registrationDateIndicators && !isDateIndicatorsValid(registrationDateIndicators)) ||
    (lastActivityDateIndicators && !isDateIndicatorsValid(lastActivityDateIndicators))
  ) {
    return false;
  }

  if (registrationDateIndicators && lastActivityDateIndicators) {
    const registrationDate = getDateByIndicators(registrationDateIndicators);
    const lastActivityDate = getDateByIndicators(lastActivityDateIndicators);

    if (registrationDate > lastActivityDate) return false;
    else if (registrationDate > new Date()) return false;
    else if (lastActivityDate > new Date()) return false;
  }

  return true;
};
