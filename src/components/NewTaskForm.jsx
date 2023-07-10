import React, { useState } from 'react';

const NewTaskForm = ({ addTask }) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <header>
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            addTask(inputValue);
            setInputValue('');
          }
        }}
      ></input>
    </header>
  );
};

export default NewTaskForm;
