import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga'
import CVReducer from '../reducers/CVReducer'
import { fetchCVJSONDetails } from '../containers/App/saga'
import { reducer as formReducer } from 'redux-form'

export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
      combineReducers({
        form: formReducer,
        CV: CVReducer,
      }),
      initialState,
      applyMiddleware(sagaMiddleware)
    );

    sagaMiddleware.run(fetchCVJSONDetails);

    return store;
}