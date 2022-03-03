import React from 'react';
import ReactDOM from 'react-dom'; //react-dom虛擬轉真實
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // React.StrictMode檢查工具
  <React.StrictMode>
    <App /> 
    {/* App是一個元件,透過render渲染到root上 */}
  </React.StrictMode>,
  document.getElementById('root') //render讚root上
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
