/* Libs */
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import React from 'react';

/* Modules */
import configureStore from './store/configureStore.js'

/* Components */
import CV from './components/CV';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <CV />
    </Provider>,
    document.getElementById('root')
);
