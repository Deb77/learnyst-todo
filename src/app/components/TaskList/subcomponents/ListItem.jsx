import { Component } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import openIcon from '../../../../../public/openIcon.png';
import closeIcon from '../../../../../public/closeIcon.png';

import styles from '../taskList.module.css';
import Spacer from '../../common/Spacer';

export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  markTaskComplete = () => {
    this.setState({ ...this.state, completed: !this.state.completed });
  };

  handleOpen = () => {
    this.setState({ ...this.state, isOpen: !this.state.isOpen, completed: false });
  };

  render() {
    const { title, description, completed } = this.props;
    const { isOpen } = this.state;
    return (
      <div className={styles.listItemContainer} onClick={this.handleOpen}>
        <div className={styles.listItemInnerContainer}>
          <div className={styles.listItemInnerContainer}>
            <input
              type='checkbox'
              value={completed}
              className={styles.checkbox}
              onClick={(e) => e.stopPropagation()}
              onChange={this.markTaskComplete}
            />
            <p
              className={classNames({
                [styles.listItemTitle]: !completed,
                [styles.listItemTitleCompleted]: completed,
              })}
            >
              {title}
            </p>
          </div>
          <Image src={isOpen ? closeIcon : openIcon} alt='accordian-icon' />
        </div>

        {isOpen && (
          <div className={styles.listItemDescriptionContainer}>
            <Spacer height={10} />
            <p className={styles.listItemDescription}>{description}</p>
          </div>
        )}
      </div>
    );
  }
}
