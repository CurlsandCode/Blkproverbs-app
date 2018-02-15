import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import App  from './containers/App';
import proverbsReducer from './reducers/proverbsReducer';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
//import {createLogger} from 'redux-logger'
//const logger = createLogger({collapsed: true})

const store = createStore(proverbsReducer, applyMiddleware(thunk))
ReactDOM.render(
	<Provider store={store}>
    <App />
   </Provider>, document.getElementById('root'));
registerServiceWorker();