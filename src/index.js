import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { newCommit, isNewCommit, InMemeryDataSource, LocalStorageDataSource } from './data';

const dataSource = new LocalStorageDataSource();

const inject = {
  newCommit,
  isNewCommit,
  loadCommits: () => dataSource.loadCommits(),
  saveCommit: (toSaved) => dataSource.saveCommit(toSaved),
  deleteCommit: (toDeleted) => dataSource.deleteCommit(toDeleted),
};

ReactDOM.render(
  <React.StrictMode>
    <App inject={inject}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
