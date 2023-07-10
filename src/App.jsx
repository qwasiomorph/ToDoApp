import { useEffect, useState } from 'react';

import './App.css';
import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList';
import Footer from './components/Footer';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');
  const [activeTasksAmount, setActiveTasksAmount] = useState(0);
  const addTask = (value) => {
    let task = {
      desc: value,
      date: new Date(),
      editing: false,
      active: true,
    };
    setTasks([...tasks, task]);
  };

  const toggleCompleted = (index) => {
    let task = tasks[index];
    task.active = !task.active;
    let listCopy = [...tasks];
    listCopy.splice(index, 1, task);
    setTasks(listCopy);
  };

  const removeTask = (index) => {
    let listCopy = [...tasks];
    listCopy.splice(index, 1);
    setTasks(listCopy);
  };

  useEffect(() => {
    console.log('Effect');
    let activeTasks = tasks.filter((task) => task.active).reduce((accelerator) => accelerator + 1, 0);
    setActiveTasksAmount(activeTasks);
  }, [tasks]);

  const editTask = (index, value) => {
    if (!value) {
      let task = tasks[index];
      task.editing = !task.editing;
      let listCopy = [...tasks];
      listCopy.splice(index, 1, task);
      setTasks(listCopy);
    } else {
      let task = tasks[index];
      task.editing = !task.editing;
      if (value !== TaskList.desc) {
        task.desc = value;
        let listCopy = [...tasks];
        listCopy.splice(index, 1, task);
        setTasks(listCopy);
      }
    }
  };

  return (
    <section className="todoapp">
      <NewTaskForm addTask={addTask} />
      <section className="main">
        <TaskList
          tasks={tasks}
          toggleCompleted={toggleCompleted}
          removeTask={removeTask}
          editTask={editTask}
          filter={filter}
        />
        <Footer filter={filter} setFilter={setFilter} length={activeTasksAmount} />
      </section>
    </section>
  );
}

export default App;
