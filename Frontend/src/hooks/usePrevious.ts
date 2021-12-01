import { useEffect, useRef } from 'react';

type refType<T> = {
  current: T | any;
};

export const usePrevious = <T>(value: T) => {
  const ref: refType<T> = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};
