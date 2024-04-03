import classNames from 'classnames';
import styles from '../taskList.module.css';

const Pill = ({ active, title, setActiveView }) => {
  return (
    <div
      className={classNames({ [styles.pillContainer]: true, [styles.activePill]: active })}
      onClick={() => setActiveView(title)}
    >
      {title}
    </div>
  );
};

export default Pill;
