import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import NewTaskForm from './NewTaskForm';
import TaskList from './TaskList';
import Footer from './Footer';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');
  const [currEditedId, setCurrEditedId] = useState('');

  const addTask = (value, timeValue) => {
    if (value.trim()) {
      let newTask = {
        id: uuidv4(),
        desc: value,
        date: new Date(),
        active: true,
        timeout: timeValue,
      };
      setTasks([...tasks, newTask]);
    }
  };

  const toggleCompleted = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          let newTask = task;
          newTask.active = !newTask.active;
          return newTask;
        } else {
          return task;
        }
      })
    );
  };

  const removeTask = (idForRemove) => {
    setTasks(tasks.filter(({ id }) => !(id === idForRemove)));
  };

  const editTask = (idForEdit, value) => {
    if (value.trim()) {
      setTasks(
        tasks.map((task) => {
          if (task.id === idForEdit) {
            let newTask = task;
            newTask.desc = value;
            return newTask;
          } else {
            return task;
          }
        })
      );
    }
  };

  const clearCompleted = () => {
    setTasks(tasks.filter(({ active }) => active));
  };

  const aciveTasksAmount = tasks.filter(({ active }) => active).reduce((prev) => prev + 1, 0);
  return (
    <section className="todoapp">
      <header>
        <NewTaskForm addTask={addTask} />
      </header>
      <section className="main">
        <TaskList
          tasks={tasks}
          toggleCompleted={toggleCompleted}
          removeTask={removeTask}
          editTask={editTask}
          filter={filter}
          currEditedId={currEditedId}
          setEditedTask={setCurrEditedId}
        />
        <Footer filter={filter} setFilter={setFilter} length={aciveTasksAmount} clearCompleted={clearCompleted} />
      </section>
    </section>
  );
};

export default App;
