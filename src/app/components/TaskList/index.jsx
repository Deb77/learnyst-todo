import pageStyles from '../../page.module.css';
import Pill from './subcomponents/Pill';
import Spacer from '../common/Spacer';
import styles from './taskList.module.css';
import ListItem from './subcomponents/ListItem';
import { getPendingTodos, getCompletedTodos } from '../../../lib/features/todos/todosSlice';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import EmptyList from '../../../../public/emptyList.svg';
import CompleteList from '../../../../public/completeList.svg';

const TaskList = () => {
  const allTodos = useSelector((state) => state.todos);
  const pendingTodos = useSelector(getPendingTodos);
  const completedTodos = useSelector(getCompletedTodos);

  const [activeView, setActiveView] = useState('All');
  const [emptyListConfig, setEmptyListConfig] = useState({ empty: false });
  const todoStatuses = { All: allTodos, Done: completedTodos, 'To Do': pendingTodos };

  const getTodosStatus = () => {
    if (activeView === 'All' && allTodos.length === 0) {
      return { image: EmptyList, message: 'No todos have been added to the list...' };
    } else if (activeView === 'Done' && allTodos.length === 0) {
      return { image: EmptyList, message: 'No todos have been added to the list...' };
    } else if (activeView === 'Done' && pendingTodos.length > 0 && completedTodos.length === 0) {
      return { image: EmptyList, message: 'None of the todos have been completed' };
    } else if (activeView === 'To Do' && allTodos.length > 0 && pendingTodos.length === 0) {
      return { image: CompleteList, message: "Yay!! You've completed all the items in the list" };
    } else if (activeView === 'To Do' && allTodos.length === 0) {
      return { image: EmptyList, message: 'No todos have been added to the list...' };
    } else {
      return {};
    }
  };

  useEffect(() => {
    const { image, message } = getTodosStatus();
    if (image && message) {
      setEmptyListConfig({ empty: true, image, message });
    } else {
      setEmptyListConfig({ empty: false });
    }
  }, [activeView, allTodos]);

  return (
    <>
      <h3 className={pageStyles.heading}>To do tasks</h3>
      <Spacer height={30} />
      <div className={styles['pills-container']}>
        {Object.keys(todoStatuses).map((pill, i) => (
          <Pill title={pill} key={i} active={pill === activeView} setActiveView={setActiveView} />
        ))}
      </div>
      <Spacer height={30} />
      <div className={styles.listItemsContainer}>
        {todoStatuses[activeView].map((todo) => (
          <div key={todo.id}>
            <ListItem
              id={todo.id}
              title={todo.title}
              description={todo.description}
              completed={todo.completed}
            />
            <Spacer height={10} />
          </div>
        ))}
        <Spacer height={40} />
        {emptyListConfig.empty && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image src={emptyListConfig.image} height={200} width={200} />
            <Spacer height={20} />
            <p style={{ color: '#b3b3b3', fontSize: 16, textAlign: 'center' }}>
              {emptyListConfig.message}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default TaskList;
