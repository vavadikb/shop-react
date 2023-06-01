import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import store from "./store/reducers/rootReducer";
import "./index.css";
import App from "./App";
import i18n from "./i18next";
import { createRoot } from 'react-dom/client';


const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(

    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </Provider>
);
