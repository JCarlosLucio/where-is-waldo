import { useRef, useState } from 'react';

function useTimer(initialVal = 0) {
  const [timer, setTimer] = useState(initialVal);
  const countRef = useRef(null);

  // adds 1 to timer every second
  const start = () => {
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };
  // stops timer
  const stop = () => {
    clearInterval(countRef.current);
  };
  // stops and resets timer
  const reset = () => {
    clearInterval(countRef.current);
    setTimer(0);
  };

  return [timer, start, stop, reset];
}

export default useTimer;
