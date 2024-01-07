import React from 'react';
import './App.css';

import { Provider } from "react-redux";
import { store } from '../store';

import { Routes } from './Routes';

import { Toaster } from 'react-hot-toast';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Routes />
      <Toaster position="bottom-right" reverseOrder={false} />
    </Provider>
  );
};

export { App };
