import React from 'react';
import styles from './ErrorMessage.module.css';
import ErrorIcon from '@/assets/error.svg'; 

export const ErrorMessage = () => (
  <div className={styles.container}>
    <img
     src={ErrorIcon} 
     alt="Error" 
     className={styles.errorIcon} 
     />
    Ошибка: не удалось загрузить информацию
    </div>
);