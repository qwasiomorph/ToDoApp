import React from 'react';
import PropTypes from 'prop-types';

import TasksFilter from '../TasksFilter';

const Footer = ({ filter, setFilter, length, clearCompleted }) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        {length === 0 ? 'No' : length} item{length !== 1 ? 's' : ''} {length === 0 ? '' : 'left'}
      </span>
      <TasksFilter filter={filter} setFilter={setFilter} />
      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

Footer.defaultProps = {
  filter: 'All',
  setFilter: () => {},
  length: 0,
  clearCompleted: () => {},
};

Footer.propTypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func,
  length: PropTypes.number,
  clearCompleted: PropTypes.func,
};

export default Footer;
