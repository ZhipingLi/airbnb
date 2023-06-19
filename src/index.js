import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { ThemeProvider } from 'styled-components';

import "normalize.css";
import "./assets/css/index.less";

import App from '@/App';
import store from './store';
import theme from './assets/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Suspense fallback="loading">
          <HashRouter>
            <App />
          </HashRouter>
        </Suspense>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);