/* Libs */
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/* Modules */
import configureStore from './store/configureStore.js'

/* Components */
import App from './containers/App/App'

const store = configureStore({CV:[], loading: true});

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);
