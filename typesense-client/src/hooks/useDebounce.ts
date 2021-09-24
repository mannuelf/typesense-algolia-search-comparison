import { useState, useEffect } from 'react';

function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer: any = () =>
      setTimeout(() => setDebouncedValue(value), delay || 500);
    return timer;
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
