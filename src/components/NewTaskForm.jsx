import React, { Component } from 'react';
import { parseTime } from '../utils/parseTimeInput';

export default class NewTaskForm extends Component {
  state = {
    inputValue: '',
    timerValue: '00:00',
    minutes: '',
    seconds: '',
  };
  setInputValue = (e) => {
    this.setState({ inputValue: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.inputValue, this.state.timerValue);
    this.setState({ inputValue: '', timerValue: '00:00', seconds: '', minutes: '' });
  };
  handleTime = (e) => {
    let time = parseTime(e.target.value);
    if (e.target.name === 'min') {
      this.setState({ minutes: e.target.value });
      time = time + this.state.timerValue.slice(2);
    } else {
      this.setState({ seconds: e.target.value });
      time = this.state.timerValue.slice(0, 3) + time;
    }
    this.setState({ timerValue: time });
  };

  render() {
    return (
      <form className="new-todo-form" onSubmit={this.handleSubmit}>
        <h1>todos</h1>
        <div className="gh-link">
          <a href="https://github.com/qwasiomorph/ToDoApp/tree/toDOTimer" target="_blank" rel="noopener noreferrer">
            <img src="../assets/githubLogo.svg" alt="gh-logo" width={30} height={30} />
          </a>
        </div>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={this.state.inputValue}
          onChange={this.setInputValue}
        ></input>
        <input
          className="new-todo-form__timer"
          placeholder="Min"
          name="min"
          maxLength={2}
          autoFocus
          value={this.state.minutes}
          onChange={this.handleTime}
        />
        <input
          className="new-todo-form__timer"
          placeholder="Sec"
          name="sec"
          maxLength={2}
          autoFocus
          value={this.state.seconds}
          onChange={this.handleTime}
        />
        <input className="hidden" type="submit"></input>
      </form>
    );
  }
}
