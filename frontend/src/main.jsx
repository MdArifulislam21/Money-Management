import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import store from './reduxPages/store';

import { Provider } from 'react-redux';




ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  {/* <React.StrictMode> */}
    <App />
  {/* </React.StrictMode>, */}
   </Provider>,
)


    // // index.js or App.js
    // import React from 'react';
    // import ReactDOM from 'react-dom';
    // import { Provider } from 'react-redux';
    // import store from './store'; // Your Redux store
    // import App from './App';

    // ReactDOM.render(
      
    //     <App />
     
    //   document.getElementById('root')
    // );