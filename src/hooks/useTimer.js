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
  // stops and resets timer
  const stop = () => {
    clearInterval(countRef.current);
  };

  return [timer, start, stop];
}

export default useTimer;
