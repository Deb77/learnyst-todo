import { Component } from 'react';
import styles from '../taskList.module.css';

export class Pill extends Component {
  render() {
    const { active, text } = this.props;
    return <div className={styles['pill-container']}>{text}</div>;
  }
}

export default Pill;
