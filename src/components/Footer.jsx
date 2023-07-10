const Footer = ({ filter, setFilter, length }) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        {length === 0 ? 'No' : length} item{length !== 1 ? 's' : ''} {length === 0 ? '' : 'left'}
      </span>
      <ul className="filters">
        <li>
          <button
            className={filter === 'All' ? 'selected' : ''}
            onClick={(e) => {
              e.preventDefault();
              setFilter('All');
            }}
          >
            All
          </button>
        </li>
        <li>
          <button
            className={filter === 'Active' ? 'selected' : ''}
            onClick={(e) => {
              e.preventDefault();
              setFilter('Active');
            }}
          >
            Active
          </button>
        </li>
        <li>
          <button
            className={filter === 'Completed' ? 'selected' : ''}
            onClick={(e) => {
              e.preventDefault();
              setFilter('Completed');
            }}
          >
            Completed
          </button>
        </li>
      </ul>
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
};

export default Footer;
