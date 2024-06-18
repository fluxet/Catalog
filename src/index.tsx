import React from 'react';
import ReactDOM from 'react-dom/client';
import dataMock from './__mocks__/Data.json'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { TChildren } from './types';

const data = dataMock as TChildren;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const expandedFolders = ['./Common7/Tools', './SDK/Bootstrapper/Packages']

root.render(
  <React.StrictMode>
    <App data={data} expandedFolders={expandedFolders} />
  </React.StrictMode>
);

reportWebVitals();
