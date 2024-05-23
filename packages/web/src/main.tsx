import React from 'react';
import ReactDOM from 'react-dom/client';
import ConfigManage from './views/configManage/index.tsx';
// import './assets/normalize.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigManage />
  </React.StrictMode>
);
