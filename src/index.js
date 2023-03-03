import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import GoToTop from './components/re-usable/GoToTop';

import './assets/css/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GoToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
