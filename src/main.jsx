import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import App from './App.jsx' 
import Parent from './Parent.jsx';
import Dependencies from './Dependencies.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Parent /> */}
    <Dependencies />
  </React.StrictMode>,
);