const TasksFilter = ({ filter, setFilter }) => {
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
};

export default TasksFilter;
