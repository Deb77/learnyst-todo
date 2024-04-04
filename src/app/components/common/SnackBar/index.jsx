import React, { useEffect, useState } from 'react';
import styles from './snackbar.module.css';
import classNames from 'classnames';

const SnackBar = ({ message, isActive, setIsActive }) => {
  const openSnackBar = () => {
    setIsActive(true);

    setTimeout(() => {
      setIsActive(false);
    }, 3000);
  };

  useEffect(() => {
    if (isActive) {
      openSnackBar();
    }
  }, [isActive]);

  return (
    <div className={classNames({ [styles.snackbar]: true, [styles.show]: isActive })}>
      {message}
    </div>
  );
};

export default SnackBar;
