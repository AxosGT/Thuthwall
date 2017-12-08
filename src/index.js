import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import setMyApp from './reducers/index';
import ContainerApp from './containers/containerApp';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {applyMiddleware, createStore} from 'redux';
import {persistStore, autoRehydrate} from 'redux-persist';
import './styles/index.css'
import './styles/App.css'

let store = createStore(setMyApp,applyMiddleware(thunk),autoRehydrate());

persistStore(store);

ReactDOM.render(
  <Provider store={store}>
      <ContainerApp />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
