import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import '../src/styles/styles.scss'
import App from './App';
import { Provider } from 'react-redux';
import store from "./redux/store"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}> {/*Redux Store-->prop */}
      <App />
    </Provider>
  </React.StrictMode>
);
