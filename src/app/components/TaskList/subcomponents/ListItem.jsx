import { Component, useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import openIcon from '../../../../../public/openIcon.png';
import closeIcon from '../../../../../public/closeIcon.png';
import pencilIcon from '../../../../../public/pencil.png';
import deleteIcon from '../../../../../public/delete.png';
import Modal from '../../common/Modal';

import { toggleCompleteTodo, deleteTodo } from '../../../../lib/features/todos/todosSlice';

import styles from '../taskList.module.css';
import Spacer from '../../common/Spacer';
import { useDispatch } from 'react-redux';

const ListItem = ({ title, description, completed, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  const dispatch = useDispatch();

  const markTaskComplete = () => {
    dispatch(toggleCompleteTodo(id));
  };

  const deleteTodoFromList = () => {
    dispatch(deleteTodo(id));
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
        <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
          <Image
            height={15}
            width={15}
            src={pencilIcon}
            alt='accordian-icon'
            unoptimized={true}
            style={{ cursor: 'pointer' }}
            onClick={(e) => {
              e.stopPropagation();
              setOpenEditModal(true);
            }}
          />
          <Image
            height={15}
            width={15}
            src={deleteIcon}
            alt='accordian-icon'
            unoptimized={true}
            style={{ cursor: 'pointer' }}
            onClick={(e) => {
              deleteTodo(id);
              deleteTodoFromList();
            }}
          />
          <Image src={isOpen ? closeIcon : openIcon} alt='accordian-icon' unoptimized={true} />
        </div>
      </div>

      {isOpen && (
        <div className={styles.listItemDescriptionContainer}>
          <Spacer height={10} />
          <p className={styles.listItemDescription}>{description}</p>
        </div>
      )}

      {openEditModal && (
        <Modal setIsOpen={setOpenEditModal} title={title} description={description} id={id} />
      )}
    </div>
  );
};

export default ListItem;
