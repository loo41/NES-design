import { useEffect, useRef } from 'react';

export function useCacheHook<T>(fn: () => void, value: T) {
  const refValue = useRef(value);

  return useEffect(() => {
    if (refValue.current !== value) {
      fn.call(null);
    }
  }, [value]);
}
