"use client";
import { useState } from "react";
import classNames from "classnames";

import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";
import FloatingIcon from "./components/FloatingIcon";

import useWindowSize from "./hooks/useWindowSize";

import styles from "./page.module.css";

const Home = () => {
  const { width } = useWindowSize();
  const [openForm, setOpenForm] = useState(false);
  const [useScrollView, setUseScrollView] = useState(false);

  return (
    <main className={classNames({ [styles.container]: true, [styles.containerScroll]: useScrollView })}>
      <section className={classNames(styles.addTaskContainer, styles.innerContainer)}>
        <div className={styles.createTaskContainer}>
          <CreateTask modal={openForm} screenWidth={width} />
        </div>
      </section>
      <section className={styles.innerContainer}>
        <TaskList setUseScrollView={setUseScrollView} />
      </section>
      <FloatingIcon onClick={() => setOpenForm(!openForm)} closeIcon={openForm} />
      <div className={styles.formModalContainer} animate={openForm ? "open" : "closed"} initial={"closed"}>
        <div className={classNames({ [styles.formModalInnerContainer]: true, [styles.openModalForm]: !openForm, [styles.closeModalForm]: openForm })}>
          <CreateTask modal={openForm} screenWidth={width} />
        </div>
      </div>
    </main>
  );
};

export default Home;
