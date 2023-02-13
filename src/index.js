import React from 'react';
import ReactDOM from 'react-dom/client';
import AReduxApp from './ARedux-container/AReduxApp'
import { Provider } from 'react-redux';
import store from './ARedux-container/Redux-app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <AReduxApp />
  </Provider>
  </React.StrictMode>
);

