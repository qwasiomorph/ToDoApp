import React, { Component } from 'react';

export default class NewTaskForm extends Component {
  state = {
    inputValue: '',
    timerValue: '00:10',
  };
  setInputValue = (e) => {
    this.setState({ inputValue: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.inputValue, this.state.timerValue);
    this.setState({ inputValue: '', timerValue: '00:10' });
  };
  handleTime = (e) => {
    this.setState({ timerValue: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={this.state.inputValue}
          onChange={this.setInputValue}
        ></input>
        <input type="time" name="" id="" defaultValue={'00:10'} onChange={this.handleTime} />
      </form>
    );
  }
}
