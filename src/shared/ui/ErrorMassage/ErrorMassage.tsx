import React from 'react';
import styles from './ErrorMessage.module.css';

export const ErrorMessage = () => (
  <div className={styles.container}>Ошибка: не удалось загрузить информацию</div>
);