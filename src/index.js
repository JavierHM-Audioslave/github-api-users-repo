import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from "react-dom/client";
import { Provider } from "react-redux";
import App from './App';
import configureStore from "./Store/index";

const store = configureStore();
const root = createRoot(document.getElementById("root"));


root.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);
