import React from 'react';
import styles from './RefreshButton.module.css';

export const RefreshButton = ({ onClick }: { onClick: () => void }) => (
  <button className={styles.button} onClick={onClick}>
    Обновить
  </button>
);