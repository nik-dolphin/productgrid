/**
 * Developed By: Bharat Jograna
 * Created on: 22 July 2022
 * Common Sagas to use in any module
*/
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

//Action Types..
import {

	GET_DATA_LIST

} from '../actions';

//Action methods..
import {

    getDataListSuccess,
    getDataListFailure

} from '../actions';

//Get function form helper for Rest API Call
import { callRestAPI } from './SagasHelper';


/**
 * Function To Get Data List API
 */
function* getDataListAPI({ payload }) {

    const response = yield call(callRestAPI, payload.APIURL, payload.Data, payload.headers);
    try {
        if (response.statusCode === 200) {
            yield put(getDataListSuccess(response));
        } else {
            yield put(getDataListFailure(response));
        }
    } catch (error) {
        yield put(getDataListFailure(error));
    }
}

// Create Sagas method To Get Data List
export function* getDataListSagas() {
    yield takeEvery(GET_DATA_LIST, getDataListAPI);
}

// Export methods to rootSagas
export default function* rootSaga() {
    yield all([
        fork(getDataListSagas)
    ]);
}