import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app/App';
import './app/styles.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   //В dev mode вызывает 2 рендер
  <React.StrictMode>
      <App />
  </React.StrictMode>
);