import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import CVReducer from '../reducers/CVReducer'
import { fetchCVJSONDetails } from '../containers/CV/saga'

export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        CVReducer,
        initialState,
        applyMiddleware(sagaMiddleware)
    );

    store.runSaga = sagaMiddleware.run(fetchCVJSONDetails);

    return store;
}