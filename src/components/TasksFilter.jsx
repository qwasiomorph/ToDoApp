import { Component } from 'react';

export default class TasksFilter extends Component {
  render() {
    const { filter, setFilter } = this.props;
    return (
      <ul className="filters">
        {['All', 'Active', 'Completed'].map((filt) => (
          <li key={filt}>
            <button
              className={filter === filt ? 'selected' : ''}
              onClick={(e) => {
                e.preventDefault();
                setFilter(filt);
              }}
            >
              {filt}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
