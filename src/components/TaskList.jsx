import Task from './Task';

const TaskList = ({ tasks, toggleCompleted, removeTask, editTask, filter }) => {
  return (
    <ul className="todo-list">
      {tasks
        .filter((task) => {
          if (filter === 'All') {
            return true;
          }
          if (filter === 'Completed') {
            return !task.active;
          }
          if (filter === 'Active') {
            return task.active;
          }
        })
        .map((task, index) => (
          <Task
            key={task.date + index}
            info={task}
            toggleCompleted={toggleCompleted}
            removeTask={removeTask}
            editTask={editTask}
            index={index}
          />
        ))}
    </ul>
  );
};

export default TaskList;
