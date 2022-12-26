import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Global } from './Style/Global';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Global />
  </React.StrictMode>,
);
