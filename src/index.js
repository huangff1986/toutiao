import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App';

import rootReducer from './reducers/rootReducer.js'
import rootSaga from './sagas'
import createSagaMiddleware from 'redux-saga'
import {createStore,applyMiddleware,compose} from 'redux'

const sagaMiddleware = createSagaMiddleware();


let storeEnhancers = compose(
  applyMiddleware(sagaMiddleware)
)

let initialState = {}

const store = createStore(rootReducer, initialState, storeEnhancers)
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  ,
  document.getElementById('root')
);
