import React, { Component } from 'react';

export default class NewTaskForm extends Component {
  state = {
    inputValue: '',
  };
  setInputValue = (e) => {
    this.setState({ inputValue: e.target.value });
  };
  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.props.addTask(this.state.inputValue);
      this.setState({ inputValue: '' });
    }
  };

  render() {
    return (
      <>
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={this.state.inputValue}
          onChange={this.setInputValue}
          onKeyDown={this.handleKeyDown}
        ></input>
      </>
    );
  }
}
