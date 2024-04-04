import { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import { v4 } from "uuid";

import Spacer from "../common/Spacer";
import SnackBar from "../common/SnackBar";
import TextField from "../common/TextField";
import TextArea from "../common/TextArea";
import { addTodo } from "../../../lib/features/todos/todosSlice";

import pageStyles from "../../page.module.css";
import styles from "./createTask.module.css";

class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", description: "", openSnackbar: false, error: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const titleEmpty = this.state.title.trim() === "",
      descriptionEmpty = this.state.description.trim() === "";

    if (titleEmpty || descriptionEmpty) {
      this.setState({
        error: (titleEmpty && "Title cannot be left empty") || (descriptionEmpty && "Description cannot be left empty"),
      });
    } else {
      this.setState({ title: "", description: "", openSnackbar: true, error: "" });
      this.props.addTodo({ title: this.state.title, description: this.state.description, completed: false, id: v4() });
    }
  };

  render() {
    return (
      <form className={styles.formContainer} onSubmit={this.handleSubmit}>
        <h3 className={pageStyles.heading}>Add task</h3>
        <Spacer height={30} />
        <label className={classNames({ [styles.fullWidth]: true, [styles.label]: true })}>Task Title</label>
        <Spacer height={15} />
        <TextField name="title" value={this.state.title} onChange={this.handleChange} placeholder="Enter task title" />
        <Spacer height={15} />
        <label className={classNames(styles.fullWidth, styles.label)}>Task Description</label>
        <Spacer height={15} />
        <TextArea name="description" value={this.state.description} onChange={this.handleChange} placeholder="Enter task description" />
        <Spacer height={40} />
        <div className={styles.errorContainer}>
          <div className={classNames({ [styles.error]: !!this.state.error })}>{this.state.error}</div>
        </div>
        <Spacer height={20} />
        <button className={classNames(styles.fullWidth, styles.addTaskBtn)}>Add Task</button>
        <SnackBar
          message={"Task Added To List"}
          isActive={this.state.openSnackbar && this.props.screenWidth <= 750}
          setIsActive={(val) => this.setState({ ...this.state, openSnackbar: val })}
        />
      </form>
    );
  }
}

const mapDispatchToProps = { addTodo };

export default connect(null, mapDispatchToProps)(CreateTask);
