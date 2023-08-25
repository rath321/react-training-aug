import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap';

import reportWebVitals from './reportWebVitals';
import RootComponent from './components/root/RootComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <RootComponent />
  // </React.StrictMode>
);

reportWebVitals();


function add(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}

// HOF - Higer Order Functions

function LoggerHOF(fn) {
  return function(...args) {
    console.log(`${fn.name} called with Arguments ${args}`);
    return fn(...args);
  }
}

const addWithLogger = LoggerHOF(add);
const subWithLogger = LoggerHOF(sub);

console.log(addWithLogger(10, 20));
console.log(subWithLogger(10, 20));