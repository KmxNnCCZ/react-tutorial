import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//components.tsxファイルをインポート
import * as Components from './components';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Components.NowTime />
    <br />
    <Components.App />
    <br />
    <Components.TodoList />
    <br />
    <Components.ProfileProps />
    <br />
    <Components.ProfileChildren />
    <br />
    <Components.PackingList />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
