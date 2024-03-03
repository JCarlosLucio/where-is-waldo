import { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { formatTime } from '../utils';

function Timer({ isGameOver }) {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    // starting/reseting of timer is controlled by isGameOver prop
    // this way we avoid uncessary re-rendering other components when setting timer state
    // (like I was doing before when timer state was in App component)
    // or avoid having to call start/reset function from a parent
    // https://stackoverflow.com/questions/37949981/call-child-method-from-parent

    let interval;
    if (!isGameOver) {
      // start interval/timer
      interval = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
    } else if (isGameOver) {
      // stops/resets timer
      clearInterval(interval);
      setTimer(0);
    }

    // when component unmounts stops timer / clearInterval
    return () => {
      clearInterval(interval);
    };
  }, [isGameOver]);

  return <Fragment>{formatTime(timer)}</Fragment>;
}

Timer.propTypes = {
  isGameOver: PropTypes.bool,
};

export default Timer;
