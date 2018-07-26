import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import './index.css';
import App from './App';
import reducer from './store/reducers/burgerBuilder';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));
registerServiceWorker();
