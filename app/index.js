/* Libs */
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Router } from 'react-router'
import createHistory from 'history/createBrowserHistory'

/* Modules */

import configureStore from './store/configureStore.js'
import App from './containers/App/App'
const store = configureStore({CV:[], loading: true});
import hashLinkScroll from './utils/navigation'

const history = createHistory()
history.listen((location, action) => {
    hashLinkScroll();
});

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <MuiThemeProvider>
                <App />
            </MuiThemeProvider>
        </Router>
    </Provider>,
    document.getElementById('root')
);
