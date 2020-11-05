import { useState, useEffect } from 'react';

function useTimedToggle(interval) {
  const [value, setValue] = useState(false);

  const toggle = () => {
    setValue(true);
  };

  useEffect(
    () => {
      let timeout;
      if (value && interval) {
        timeout = setTimeout(() => setValue(false), interval);
      }
      return () => {
        clearTimeout(timeout);
      };
    },
    [value, interval]
  );

  return [value, toggle];
}

export default useTimedToggle;
