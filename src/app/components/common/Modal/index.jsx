import React, { useState } from 'react';
import styles from './Modal.module.css';
import Image from 'next/image';
import closeIcon from '../../../../../public/close.png';
import classNames from 'classnames';
import Spacer from '../Spacer';
import { updateTodo } from '@/lib/features/todos/todosSlice';
import { useDispatch } from 'react-redux';

const Modal = ({ setIsOpen, title, description, id }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const dispatch = useDispatch();

  const saveChanges = () => {
    if (newTitle !== title || newDescription !== description) {
      dispatch(updateTodo({ id, title: newTitle, description: newDescription }));
    }
    setIsOpen(false);
  };

  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Edit Your List Item</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <Image src={closeIcon} unoptimized={true} height={15} width={15} alt='Close' />
          </button>
          <div className={styles.modalContent}>
            <label className={classNames(styles.fullWidth, styles.label)}>Edit Task Title</label>
            <Spacer height={15} />
            <input
              name='title'
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className={classNames(styles.fullWidth, styles.textField)}
              placeholder='Enter task title'
            ></input>

            <Spacer height={15} />
            <label className={classNames(styles.fullWidth, styles.label)}>
              Edit Task Description
            </label>
            <Spacer height={15} />
            <textarea
              name='description'
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              className={classNames(styles.fullWidth, styles.textArea)}
              placeholder='Enter task description'
            ></textarea>
            <Spacer height={40} />
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button className={styles.cancelBtn} onClick={() => setIsOpen(false)}>
                Cancel
              </button>
              <button className={styles.saveBtn} onClick={saveChanges}>
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
