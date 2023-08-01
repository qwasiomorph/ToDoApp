import React, { useState } from 'react';
import PropTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import Timer from '../Timer';

const Task = ({ info, toggleCompleted, removeTask, editTask, currEditedId, setEditedTask }) => {
  const [editValue, setEditValue] = useState(info.desc);
  const isAscending = info.timeout === '00:00';

  const handleEditChange = (e) => {
    setEditValue(e.target.value);
  };
  const handleComplete = () => {
    toggleCompleted(info.id);
  };
  const handleDelete = () => {
    removeTask(info.id);
  };
  const handleEditClick = () => {
    setEditedTask(info.id);
  };
  const handleEditKeyDown = (e) => {
    if (e.key === 'Enter') {
      editTask(info.id, editValue);
      setEditedTask('');
    }
  };

  const editing = currEditedId === info.id;
  const taskClassName = !info.active ? 'completed' : editing ? 'editing' : '';
  return (
    <li className={taskClassName}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={!info.active} onChange={handleComplete} />
        <label>
          <span className="title">{info.desc}</span>
          {info.active && <Timer timerValue={info.timeout} isAscending={isAscending} />}
          <span className="description">{formatDistanceToNow(info.date, { addSuffix: true })}</span>
        </label>
        <button className="icon icon-edit" onClick={handleEditClick}></button>
        <button className="icon icon-destroy" onClick={handleDelete}></button>
      </div>
      {editing ? (
        <input
          type="text"
          className="edit"
          value={editValue}
          onChange={handleEditChange}
          onKeyDown={handleEditKeyDown}
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
  currEditedId: '',
  setEditedTask: () => {},
};

Task.propTypes = {
  info: PropTypes.object,
  toggleCompleted: PropTypes.func,
  removeTask: PropTypes.func,
  editTask: PropTypes.func,
  currEditedId: PropTypes.string,
  setEditedTask: PropTypes.func,
};

export default Task;
