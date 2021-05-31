import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import SEARCH_COMPONENT_W from './components/wrapContainers/searchComponent_w';
import store from './store/store';

ReactDOM.render(
    <Provider store={store}>
      <SEARCH_COMPONENT_W />
    </Provider>,
  document.getElementById('root')
);

