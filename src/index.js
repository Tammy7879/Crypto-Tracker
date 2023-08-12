import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import your root component
import CryptoContext from './CryptoContext';
import 'react-alice-carousel/lib/alice-carousel.css';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <CryptoContext>
        <App />
  </CryptoContext>


, rootElement);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

