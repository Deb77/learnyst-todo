import React from 'react';
import classNames from 'classnames';
import styles from './floatingIcon.module.css';

const FloatingIcon = ({ onClick, closeIcon }) => {
  return (
    <div
      className={classNames({
        [styles.floatIcon]: true,
        [styles.floatIconOpen]: !closeIcon,
        [styles.floatIconClose]: closeIcon,
      })}
      onClick={onClick}
    >
      {closeIcon ? 'x' : '+'}
    </div>
  );
};

export default FloatingIcon;
