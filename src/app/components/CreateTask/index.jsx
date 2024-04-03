import { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { v4 } from 'uuid';

import Spacer from '../common/Spacer';
import { addTodo } from '../../../lib/features/todos/todosSlice';

import pageStyles from '../../page.module.css';
import styles from './createTask.module.css';

class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '', description: '' };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ title: '', description: '' });
    this.props.addTodo({ ...this.state, completed: false, id: v4() });
  };

  render() {
    return (
      <form className={styles.formContainer} onSubmit={this.handleSubmit}>
        <h3 className={pageStyles.heading}>Add task</h3>
        <Spacer height={30} />
        <label className={classNames({ [styles.fullWidth]: true, [styles.label]: true })}>
          Task Title
        </label>
        <Spacer height={15} />
        <input
          name='title'
          value={this.state.title}
          onChange={this.handleChange}
          className={classNames(styles.fullWidth, styles.textField)}
          placeholder='Enter task description'
        ></input>
        <Spacer height={15} />
        <label className={classNames(styles.fullWidth, styles.label)}>Task Description</label>
        <Spacer height={15} />
        <textarea
          name='description'
          value={this.state.description}
          onChange={this.handleChange}
          className={classNames(styles.fullWidth, styles.textArea)}
          placeholder='Enter task description'
        ></textarea>
        <Spacer height={60} />
        <button className={classNames(styles.fullWidth, styles.addTaskBtn)}>Add Task</button>
      </form>
    );
  }
}

const mapDispatchToProps = { addTodo };

export default connect(null, mapDispatchToProps)(CreateTask);
