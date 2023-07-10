import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import NewTaskForm from './NewTaskForm';
import TaskList from './TaskList';
import Footer from './Footer';

export default class App extends Component {
  state = {
    tasks: [],
    filter: 'All',
    currEditedId: '',
  };

  addTask = (value) => {
    if (value) {
      let newTask = {
        id: uuidv4(),
        desc: value,
        date: new Date(),
        active: true,
      };
      this.setState({
        tasks: [...this.state.tasks, newTask],
      });
    }
  };

  toggleCompleted = (id) => {
    this.setState({
      tasks: this.state.tasks.map((task) => {
        if (task.id === id) {
          let newTask = task;
          newTask.active = !newTask.active;
          return newTask;
        } else {
          return task;
        }
      }),
    });
  };

  removeTask = (idForRemove) => {
    this.setState({
      tasks: this.state.tasks.filter(({ id }) => !(id === idForRemove)),
    });
  };

  editTask = (idForEdit, value) => {
    if (value) {
      this.setState({
        tasks: this.state.tasks.map((task) => {
          if (task.id === idForEdit) {
            let newTask = task;
            newTask.desc = value;
            return newTask;
          } else {
            return task;
          }
        }),
      });
    }
  };

  setEditedTask = (id) => {
    this.setState({ currEditedId: id });
  };

  setFilter = (newFilter) => {
    this.setState({ filter: newFilter });
  };

  clearCompleted = () => {
    this.setState({
      tasks: this.state.tasks.filter(({ active }) => active),
    });
  };

  render() {
    const aciveTasksAmount = this.state.tasks.filter(({ active }) => active).reduce((prev) => prev + 1, 0);
    return (
      <section className="todoapp">
        <header>
          <NewTaskForm addTask={this.addTask} />
        </header>
        <section className="main">
          <TaskList
            tasks={this.state.tasks}
            toggleCompleted={this.toggleCompleted}
            removeTask={this.removeTask}
            editTask={this.editTask}
            filter={this.state.filter}
            currEditedId={this.state.currEditedId}
            setEditedTask={this.setEditedTask}
          />
          <Footer
            filter={this.state.filter}
            setFilter={this.setFilter}
            length={aciveTasksAmount}
            clearCompleted={this.clearCompleted}
          />
        </section>
      </section>
    );
  }
}
