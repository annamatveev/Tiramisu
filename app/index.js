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

const history = createHistory()
history.listen((location, action) => {
    hashLinkScroll();
});

function hashLinkScroll() {
    const { hash } = window.location;
    if (hash !== '') {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView();
            window.scrollBy(0, -50);
        }
    }
}

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
