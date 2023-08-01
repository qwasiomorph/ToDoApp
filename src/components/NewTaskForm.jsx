import React, { useState } from 'react';

import { parseTime } from '../utils/parseTimeInput';

const NewTaskForm = ({ addTask }) => {
  const [inputValue, putValue] = useState('');
  const [timerValue, setTimerValue] = useState('00:00');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');

  const setInputValue = (e) => {
    putValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(inputValue, timerValue);
    putValue('');
    setTimerValue('00:00');
    setMinutes('');
    setSeconds('');
  };
  const handleTime = (e) => {
    let time = parseTime(e.target.value);
    if (e.target.name === 'min') {
      setMinutes(e.target.value);
      time = time + timerValue.slice(2);
    } else {
      setSeconds(e.target.value);
      time = timerValue.slice(0, 3) + time;
    }
    setTimerValue(time);
  };

  return (
    <form className="new-todo-form" onSubmit={handleSubmit}>
      <h1>todos</h1>
      <div className="gh-link">
        <a href="https://github.com/qwasiomorph/ToDoApp/tree/toDOTimer" target="_blank" rel="noopener noreferrer">
          <img src="/github.svg" alt="gh-logo" width={30} height={30} />
        </a>
      </div>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={inputValue}
        onChange={setInputValue}
      ></input>
      <input
        className="new-todo-form__timer"
        placeholder="Min"
        name="min"
        maxLength={2}
        autoFocus
        value={minutes}
        onChange={handleTime}
      />
      <input
        className="new-todo-form__timer"
        placeholder="Sec"
        name="sec"
        maxLength={2}
        autoFocus
        value={seconds}
        onChange={handleTime}
      />
      <input className="hidden" type="submit"></input>
    </form>
  );
};

export default NewTaskForm;
