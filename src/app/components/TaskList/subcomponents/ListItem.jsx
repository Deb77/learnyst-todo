import { useState } from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";
import classNames from "classnames";

import Modal from "./Modal";
import Spacer from "../../common/Spacer";
import { toggleCompleteTodo, deleteTodo } from "@/lib/features/todos/todosSlice";

import styles from "../taskList.module.css";

const openIcon = "/openIcon.png";
const closeIcon = "/closeIcon.png";
const pencilIcon = "/pencil.png";
const deleteIcon = "/delete.png";

const ListItem = ({ title, description, completed, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  const dispatch = useDispatch();

  const markTaskComplete = () => {
    dispatch(toggleCompleteTodo(id));
  };

  const deleteTodoFromList = (e) => {
    e.stopPropagation();
    dispatch(deleteTodo(id));
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const editTodo = (e) => {
    e.stopPropagation();
    setOpenEditModal(true);
  };

  return (
    <div className={styles.listItemContainer} onClick={handleOpen}>
      <div className={styles.listItemInnerContainer}>
        <div className={styles.listItemInnerContainer}>
          <input type="checkbox" checked={completed} className={styles.checkbox} onClick={(e) => e.stopPropagation()} onChange={markTaskComplete} />
          <p className={classNames({ [styles.listItemTitle]: !completed, [styles.listItemTitleCompleted]: completed })}>{title}</p>
        </div>
        <div className={styles.iconsContainer}>
          <Image height={15} width={15} src={pencilIcon} alt="accordian-icon-pencil" unoptimized={true} className={styles.icon} onClick={editTodo} />
          <Image height={15} width={15} src={deleteIcon} alt="accordian-icon-delete" unoptimized={true} className={styles.icon} onClick={deleteTodoFromList} />
          <Image height={7} width={14} src={isOpen ? closeIcon : openIcon} alt="accordian-icon-toggle" unoptimized={true} />
        </div>
      </div>
      {isOpen && (
        <div className={styles.listItemDescriptionContainer}>
          <Spacer height={10} />
          <p className={styles.listItemDescription}>{description}</p>
        </div>
      )}
      {openEditModal && <Modal setIsOpen={setOpenEditModal} title={title} description={description} id={id} />}
    </div>
  );
};

export default ListItem;
