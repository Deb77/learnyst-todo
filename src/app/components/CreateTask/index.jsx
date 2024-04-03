import classNames from 'classnames';
import Spacer from '../common/Spacer';
import pageStyles from '../../page.module.css';
import styles from './createTask.module.css';

const CreateTask = ({ modal }) => {
  return (
    <form className={styles.formContainer}>
      <h3 className={pageStyles.heading}>Add task</h3>
      <Spacer height={30} />
      <label className={classNames({ [styles['full-width']]: true, [styles['label']]: true })}>
        Task Title
      </label>
      <Spacer height={15} />
      <input
        className={classNames(styles['full-width'], styles['text-field'])}
        placeholder='Enter task description'
      ></input>
      <Spacer height={15} />
      <label className={classNames(styles['full-width'], styles['label'])}>Task Description</label>
      <Spacer height={15} />
      <textarea
        className={classNames(styles['full-width'], styles['text-area'])}
        placeholder='Enter task description'
      ></textarea>
      <Spacer height={60} />
      <button className={classNames(styles['full-width'], styles['add-task-btn'])}>Add Task</button>
    </form>
  );
};

export default CreateTask;
