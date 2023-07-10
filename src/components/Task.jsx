import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Task extends Component {
  state = {
    editValue: this.props.info.desc,
  };
  handleEditChange = (e) => {
    this.setState({ editValue: e.target.value });
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

  render() {
    const { info, currEditedId } = this.props;
    const editing = currEditedId === info.id;
    const taskClassName = !info.active ? 'completed' : editing ? 'editing' : '';
    return (
      <li className={taskClassName}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={!info.active} onChange={this.handleComplete} />
          <label>
            <span className="description">{info.desc}</span>
            <span className="created">{formatDistanceToNow(info.date, { addSuffix: true })}</span>
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
