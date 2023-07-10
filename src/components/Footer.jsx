import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TasksFilter from './TasksFilter';

export default class Footer extends Component {
  render() {
    const { filter, setFilter, length, clearCompleted } = this.props;
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
  }

  static defaultProps = {
    filter: 'All',
    setFilter: () => {},
    length: 0,
    clearCompleted: () => {},
  };

  static propTypes = {
    filter: PropTypes.string,
    setFilter: PropTypes.func,
    length: PropTypes.number,
    clearCompleted: PropTypes.func,
  };
}
