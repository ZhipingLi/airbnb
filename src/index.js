import React from 'react';
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
   * Provider > Hash/BrowserRouter > Suspense > {useRoutes(routes)}
   * 
   * explanation:
   * <Suspense/>包裹<Provider store={store}/>会导致异步加载的组件（import()函数引入的组件）收不到来自store(connect/useSelector)的消息发布。
   * 因为<Provider/>在组件内部使用store.subscribe(() => {...})添加订阅时，这些异步加载的组件还未渲染出来。
   * 但渲染完成后，异步加载的组件可以通过dispatch派发changed actions修改store中的数据。
   */
  // <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        {/* Suspense可直接仅包裹 {useRoutes(routes)}, 以避免app-header、app-footer的重复渲染*/}
        {/* <Suspense fallback="loading"> */}
          <BrowserRouter>
            <App />
          </BrowserRouter>
        {/* </Suspense> */}
      </Provider>
    </ThemeProvider>
  // </React.StrictMode>
);