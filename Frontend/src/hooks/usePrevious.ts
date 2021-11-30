import { useEffect, useRef } from 'react';

type refType = {
  current: string;
};

export const usePrevious = (value: string) => {
  const ref: refType = useRef('');

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};
