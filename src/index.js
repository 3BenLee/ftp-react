import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import "typeface-roboto-condensed";
import "typeface-raleway";

const application = (
  <Provider store={store} >
      <App />
  </Provider>
);

ReactDOM.render(application, document.getElementById('root'));
registerServiceWorker();









