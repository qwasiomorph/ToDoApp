import { useEffect, useState } from 'react';

import addZero from '../utils/addZero';
import { timeStringToInt } from '../utils/parseTimeInput';

const Timer = ({ timerValue, isAscending }) => {
  const [isPaused, togglePause] = useState(true);
  const [timerValueView, setTimerValueView] = useState(null);
  const increment = isAscending ? 1 : -1;

  const handleTimerStart = () => {
    togglePause(false);
  };

  const handleTimerStop = () => {
    togglePause(true);
  };

  const stopAndReset = () => {
    togglePause(true);
    setTimerValueView(null);
  };

  const parseTimer = (value) => {
    let seconds = value;
    let hours = Math.floor(seconds / 3600);
    seconds -= hours * 3600;
    let minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;
    let result = '';
    if (hours) {
      result += `${addZero(hours)}:`;
    }
    result += `${addZero(minutes)}:`;
    result += `${addZero(seconds)}`;
    return result;
  };

  useEffect(() => {
    let currentTimerValue = timerValueView ? timeStringToInt(timerValueView) : timeStringToInt(timerValue);
    let timerId = null;

    if (!isPaused) {
      timerId = setInterval(() => {
        if (currentTimerValue === 0 && !isAscending) {
          stopAndReset();
          return;
        }
        currentTimerValue += increment;
        setTimerValueView(parseTimer(currentTimerValue));
      }, 1000);
    } else {
      clearInterval(timerId);
    }
    return () => {
      clearInterval(timerId);
    };
  }, [isPaused]);

  return (
    <>
      <span className="description">
        <button onClick={handleTimerStart} className="icon icon-play"></button>
        <button onClick={handleTimerStop} className="icon icon-pause"></button>
        <span className="timer">{timerValueView ? timerValueView : timerValue}</span>
      </span>
    </>
  );
};

export default Timer;
