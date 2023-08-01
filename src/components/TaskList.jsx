import Task from './Task';

const TaskList = ({ tasks, toggleCompleted, removeTask, editTask, filter, currEditedId, setEditedTask }) => {
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'All') {
      return true;
    }
    if (filter === 'Completed') {
      return !task.active;
    }
    if (filter === 'Active') {
      return task.active;
    }
  });
  return (
    <ul className="todo-list">
      {filteredTasks.map((task) => (
        <Task
          key={task.id}
          info={task}
          toggleCompleted={toggleCompleted}
          removeTask={removeTask}
          editTask={editTask}
          currEditedId={currEditedId}
          setEditedTask={setEditedTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
