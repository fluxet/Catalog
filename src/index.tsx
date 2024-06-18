import React from 'react';
import ReactDOM from 'react-dom/client';
import dataMock from './__mocks__/Data.json'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { expandedFolders } from './constants';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App data={dataMock} expandedFolders={expandedFolders} />
  </React.StrictMode>
);

reportWebVitals();
