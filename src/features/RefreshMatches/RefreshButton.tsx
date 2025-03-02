import React from 'react';
import styles from './RefreshButton.module.css';

export const RefreshButton = ({
  onClick,
  loading,
  setLoading,
}: {
  onClick: () => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleClick = async () => {
    setLoading(true);
    await onClick(); 
    setLoading(false);
  };

  return (
    <button 
      className={`${styles.button} ${loading ? styles.loading : ''}`} 
      onClick={handleClick}
      disabled={loading} 
    >
      <span className={styles.buttonText}>Обновить</span>
      <svg 
        className={`${styles.spinner} ${loading ? styles.spinnerLoading : ''}`} 
        viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13.0853 2.4375C7.89235 2.4375 3.62334 6.40576 3.2071 11.4653H2.16653C1.83732 11.4653 1.54065 11.6639 1.41527 11.9683C1.28988 12.2727 1.36057 12.6227 1.59427 12.8546L3.41406 14.6601C3.73084 14.9744 4.24181 14.9744 4.55859 14.6601L6.37838 12.8546C6.61208 12.6227 6.68277 12.2727 6.55738 11.9683C6.432 11.6639 6.13533 11.4653 5.80612 11.4653H4.83887C5.25023 7.31431 8.78003 4.0625 13.0853 4.0625C16.0856 4.0625 18.7119 5.64249 20.1667 8.00886C20.4017 8.39113 20.9021 8.51051 21.2844 8.2755C21.6667 8.04049 21.7861 7.54009 21.551 7.15782C19.8108 4.32713 16.6694 2.4375 13.0853 2.4375Z" fill="white"/>
        <path opacity="0.5" d="M22.5779 11.3388C22.2614 11.0259 21.7521 11.0259 21.4356 11.3388L19.6088 13.1443C19.3745 13.376 19.3032 13.7262 19.4284 14.031C19.5536 14.3357 19.8505 14.5347 20.18 14.5347H21.154C20.741 18.6834 17.1989 21.9375 12.873 21.9375C9.85862 21.9375 7.22136 20.3562 5.76113 17.99C5.52547 17.6081 5.02486 17.4896 4.64299 17.7252C4.26112 17.9609 4.1426 18.4615 4.37826 18.8434C6.12525 21.6742 9.27774 23.5625 12.873 23.5625C18.0815 23.5625 22.3681 19.5967 22.7859 14.5347H23.8335C24.163 14.5347 24.4599 14.3357 24.5851 14.031C24.7103 13.7262 24.639 13.376 24.4047 13.1443L22.5779 11.3388Z" fill="white"/>
      </svg>
    </button>
  );
};
