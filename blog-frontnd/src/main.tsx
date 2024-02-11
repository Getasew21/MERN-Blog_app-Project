// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import { ContextProvider } from './context/context';
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <ContextProvider>
//        <App />
//     </ContextProvider>
//   </React.StrictMode>,
// );


import React from "react";
import ReactDOM from 'react-dom/client';
import App from './App';
import { ContextProvider } from './context/Context';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);


