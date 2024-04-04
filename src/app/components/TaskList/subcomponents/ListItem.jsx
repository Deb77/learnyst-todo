import { Component, useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import openIcon from '../../../../../public/openIcon.png';
import closeIcon from '../../../../../public/closeIcon.png';

import { toggleCompleteTodo } from '../../../../lib/features/todos/todosSlice';

import styles from '../taskList.module.css';
import Spacer from '../../common/Spacer';
import { useDispatch } from 'react-redux';

const ListItem = ({ title, description, completed, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const markTaskComplete = () => {
    dispatch(toggleCompleteTodo(id));
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.listItemContainer} onClick={handleOpen}>
      <div className={styles.listItemInnerContainer}>
        <div className={styles.listItemInnerContainer}>
          <input
            type='checkbox'
            checked={completed}
            className={styles.checkbox}
            onClick={(e) => e.stopPropagation()}
            onChange={markTaskComplete}
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
        <Image src={isOpen ? closeIcon : openIcon} alt='accordian-icon' unoptimized={true} />
      </div>

      {isOpen && (
        <div className={styles.listItemDescriptionContainer}>
          <Spacer height={10} />
          <p className={styles.listItemDescription}>{description}</p>
        </div>
      )}
    </div>
  );
};

export default ListItem;
