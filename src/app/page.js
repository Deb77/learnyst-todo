'use client';
import classNames from 'classnames';
import styles from './page.module.css';
import CreateTask from './components/CreateTask';
import TaskList from './components/TaskList';
import FloatingIcon from './components/FloatingIcon';
import useWindowSize from './hooks/useWindowSize';
import { useState } from 'react';
import { motion } from 'framer-motion';

const variants = {
  open: {
    clipPath: 'circle(1200px at calc(100% - 50px) calc(100% - 50px))',
    transition: {
      type: 'spring',
      stiffness: 25,
    },
  },
  closed: {
    clipPath: 'circle(0px at calc(100% - 50px) calc(100% - 50px))',
    transition: {
      type: 'spring',
      stiffness: 25,
    },
  },
};

const Home = () => {
  const { width } = useWindowSize();
  const [openForm, setOpenForm] = useState(false);
  const [useScrollView, setUseScrollView] = useState(false);

  return (
    <main
      className={classNames({ [styles.container]: true, [styles.containerScroll]: useScrollView })}
    >
      <section className={classNames(styles['add-task-container'], [styles['inner-container']])}>
        <div className={styles.createTaskContainer}>
          <CreateTask modal={openForm} screenWidth={width} />
        </div>
      </section>
      <section className={styles['inner-container']}>
        <TaskList setUseScrollView={setUseScrollView} />
      </section>
      {width <= 750 && (
        <FloatingIcon
          onClick={() => {
            setOpenForm(!openForm);
          }}
          closeIcon={openForm}
        />
      )}
      <motion.div
        className={styles.formModalContainer}
        animate={openForm ? 'open' : 'closed'}
        initial={'closed'}
      >
        <motion.div className={styles.formModalInnerContainer} variants={variants}>
          <CreateTask modal={openForm} screenWidth={width} />
        </motion.div>
      </motion.div>
    </main>
  );
};

export default Home;
