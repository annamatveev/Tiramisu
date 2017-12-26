import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchError, fetchSuccess } from '../../actions/CV'

export function* fetchCVJSONDetails() {
    yield takeEvery('FETCH_REQUEST', loadDetails);
}

function* loadDetails() {
    try {
        const response = yield call(fetch, '/api/getJsonCV');
        const details = yield response.json();
        yield put(fetchSuccess(details))
    }
    catch (error) {
        yield put(fetchError());
    }
}