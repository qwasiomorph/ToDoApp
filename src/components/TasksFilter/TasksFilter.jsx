const TasksFilter = ({ filter, setFilter }) => {
  const handleFilter = (event) => {
    event.preventDefault();
    setFilter(event.target.name);
  };

  return (
    <ul className="filters">
      {['All', 'Active', 'Completed'].map((filt) => (
        <li key={filt}>
          <button type="button" name={filt} className={filter === filt ? 'selected' : ''} onClick={handleFilter}>
            {filt}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TasksFilter;
