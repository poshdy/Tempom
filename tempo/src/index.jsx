import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { store } from './redux/store';
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist"


let persistor = persistStore(store)
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <Router>
        <App />
      </Router>
      </PersistGate>
    </Provider>
  // </React.StrictMode>,
);