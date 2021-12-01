export const addDotToDate = (value: string): string => {
  if (!value.length) return '';

  if (value.length === 2 || value.length === 5) {
    value += '.';
  }

  return value;
};
