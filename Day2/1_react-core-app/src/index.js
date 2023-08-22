// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import reportWebVitals from './reportWebVitals';
// import { HelloComponent } from './components/1_hello/HelloComponent';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <HelloComponent />
//   </React.StrictMode>
// );

// reportWebVitals();

// -------------------------------------------- 
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import './index.css';

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import 'bootstrap';

// import reportWebVitals from './reportWebVitals';
// import { HelloComponent } from './components/1_hello/HelloComponent';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <HelloComponent />
//   </React.StrictMode>
// );

// reportWebVitals();

// // -------------------------------------------- 
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import './index.css';

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import 'bootstrap';

// import reportWebVitals from './reportWebVitals';
// import ComponentOne from './components/2_multi-components/ComponentOne';
// import ComponentTwo from './components/2_multi-components/ComponentTwo';

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //     <ComponentOne />
// //     <ComponentTwo />
// //   </React.StrictMode>
// // );

// const root1 = ReactDOM.createRoot(document.getElementById('root1'));
// root1.render(
//   <React.StrictMode>
//     <ComponentOne />
//   </React.StrictMode>
// );

// const root2 = ReactDOM.createRoot(document.getElementById('root2'));
// root2.render(
//   <React.StrictMode>
//     <ComponentTwo />
//   </React.StrictMode>
// );

// reportWebVitals();

// -------------------------------------------- Using Root
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
  <React.StrictMode>
    <RootComponent />
  </React.StrictMode>
);

reportWebVitals();


