import React, { useState } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const Task = ({ info, toggleCompleted, removeTask, editTask, index }) => {
  const [editValue, setEditValue] = useState(info.desc);

  return (
    <li className={!info.active ? 'completed' : info.editing ? 'editing' : ''}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={!info.active}
          onChange={() => {
            toggleCompleted(index);
          }}
        />
        <label>
          <span className="description">{info.desc}</span>
          <span className="created">{formatDistanceToNow(info.date, { addSuffix: true })}</span>
        </label>
        <button
          className="icon icon-edit"
          onClick={(e) => {
            e.preventDefault();
            editTask(index);
          }}
        ></button>
        <button
          className="icon icon-destroy"
          onClick={(e) => {
            e.preventDefault();
            removeTask(index);
          }}
        ></button>
      </div>
      {info.editing ? (
        <input
          type="text"
          className="edit"
          value={editValue}
          onChange={(e) => {
            setEditValue(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              editTask(index, editValue);
            }
          }}
        />
      ) : (
        <></>
      )}
    </li>
  );
};

Task.defaultProps = {
  info: {},
  toggleCompleted: () => {},
  removeTask: () => {},
  editTask: () => {},
  index: 0,
};

Task.propTypes = {
  info: (props, propName, componentName) => {
    const value = props[propName];
    if (typeof value === 'object') {
      return null;
    }
    return new Error(`${componentName}: ${propName} must be an Object`);
  },
  toggleCompleted: (props, propName, componentName) => {
    const value = props[propName];
    if (typeof value === 'function') {
      return null;
    }
    return new Error(`${componentName}: ${propName} must be a Function`);
  },
  removeTask: (props, propName, componentName) => {
    const value = props[propName];
    if (typeof value === 'function') {
      return null;
    }
    return new Error(`${componentName}: ${propName} must be a Function`);
  },
  editTask: (props, propName, componentName) => {
    const value = props[propName];
    if (typeof value === 'function') {
      return null;
    }
    return new Error(`${componentName}: ${propName} must be a Function`);
  },
  index: (props, propName, componentName) => {
    const value = props[propName];
    if (typeof value === 'number' && !Number.isNaN(value)) {
      return null;
    }
    return new Error(`${componentName}: ${propName} must be a Number`);
  },
};

export default Task;
