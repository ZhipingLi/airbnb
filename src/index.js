import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { ThemeProvider } from 'styled-components';

import "normalize.css";
import "./assets/css/index.less";

import App from '@/App';
import store from './store';
import theme from './assets/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /**
   * conclusion:
   * Provider > Suspense > Hash/BrowserRouter
   * 
   * explanation:
   * <Suspense/>包裹<Provider store={store}/>会导致store(connect/useSelector)监听不到异步加载的组件发出去的changed actions；
   * 因为<Provider/>在组件内部使用store.subscribe(() => {...})添加订阅时，这些异步加载的组件还未渲染出来。
   */
  // <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Suspense fallback="loading">
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Suspense>
      </Provider>
    </ThemeProvider>
  // </React.StrictMode>
);