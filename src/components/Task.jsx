import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import addZero from '../utils/addZero';

export default class Task extends Component {
  state = {
    editValue: this.props.info.desc,
    timerValue: 0,
    timerId: null,
  };
  handleEditChange = (e) => {
    this.stopTimout(this.state.timerId);
    this.setState({ editValue: e.target.value, timerValue: 0 });
  };
  handleComplete = () => {
    this.props.toggleCompleted(this.props.info.id);
  };
  handleDelete = () => {
    this.props.removeTask(this.props.info.id);
  };
  handleEditClick = () => {
    this.props.setEditedTask(this.props.info.id);
  };
  handleEditKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.props.editTask(this.props.info.id, this.state.editValue);
      this.props.setEditedTask('');
    }
  };

  startTimeout = (sTime = '00:01', timerValue) => {
    let seconds;
    if (!this.state.timerValue) {
      let [hours, minutes] = sTime.split(':');
      seconds = hours * 60 * 60 + minutes * 60;
      this.setState({ timerValue: seconds });
    } else {
      seconds = this.state.timerValue;
    }
    return setInterval(() => {
      if (this.state.timerValue === 0) {
        this.stopTimout(this.state.timerId);
        return;
      }
      this.setState(() => {
        return { timerValue: this.state.timerValue - 1 };
      });
    }, 1000);
  };

  stopTimout = (timeout) => {
    clearInterval(timeout);
  };

  handleTimerStart = () => {
    this.setState({ timerId: this.startTimeout(this.props.info.timeout) });
  };
  handleTimerStop = () => {
    this.stopTimout(this.state.timerId);
    this.setState({ timerId: null });
  };

  parseTimer = () => {
    let seconds = this.state.timerValue;
    let hours = Math.floor(seconds / 3600);
    seconds -= hours * 3600;
    let minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;
    let result = ``;
    if (hours) {
      result += `${addZero(hours)}:`;
    }
    if (minutes) {
      result += `${addZero(minutes)}:`;
    }
    result += `${addZero(seconds)}`;
    return result;
  };

  componentWillUnmount() {
    this.stopTimout(this.state.timerId);
  }

  render() {
    const { info, currEditedId } = this.props;
    const editing = currEditedId === info.id;
    const taskClassName = !info.active ? 'completed' : editing ? 'editing' : '';
    return (
      <li className={taskClassName}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={!info.active} onChange={this.handleComplete} />
          <label>
            <span className="title">{info.desc}</span>
            <span className="description">
              <button onClick={this.handleTimerStart} className="icon icon-play"></button>
              <button onClick={this.handleTimerStop} className="icon icon-pause"></button>
              <span className="timer">{this.state.timerValue ? this.parseTimer() : info.timeout}</span>
            </span>
            <span className="description">{formatDistanceToNow(info.date, { addSuffix: true })}</span>
          </label>
          <button className="icon icon-edit" onClick={this.handleEditClick}></button>
          <button className="icon icon-destroy" onClick={this.handleDelete}></button>
        </div>
        {editing ? (
          <input
            type="text"
            className="edit"
            value={this.state.editValue}
            onChange={this.handleEditChange}
            onKeyDown={this.handleEditKeyDown}
          />
        ) : (
          <></>
        )}
      </li>
    );
  }

  static defaultProps = {
    info: {},
    toggleCompleted: () => {},
    removeTask: () => {},
    editTask: () => {},
    currEditedId: '',
    setEditedTask: () => {},
  };

  static propTypes = {
    info: PropTypes.object,
    toggleCompleted: PropTypes.func,
    removeTask: PropTypes.func,
    editTask: PropTypes.func,
    currEditedId: PropTypes.string,
    setEditedTask: PropTypes.func,
  };
}
