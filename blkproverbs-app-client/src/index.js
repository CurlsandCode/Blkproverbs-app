import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
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

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(proverbsReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
	<Provider store={store}>
    <App />
   </Provider>, document.getElementById('root'));
registerServiceWorker();