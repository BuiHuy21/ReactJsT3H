import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/antd.min.css'; // phải import file css lên trước componets
import './index.css';
// import App from './App';
// import App from './counter/index';
// import App from './Axios/App';
// import App from './Lifecycles/Parent';
// import App from './Covid/App';
// import App from './CountDownClone/App'
// import App from './Movies/App';
// import App from './learning/MyComponents';
// import App from './Hooks/counter/index';
// import App from './Hooks/Football/App';
// import App from './Context/App';
// import App from './Context/App';
// import App from './Hooks/Time/App';
// import App from './ReactYT/Components/Task';
// import App from './Todo1/app'
import App from './cgv/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
