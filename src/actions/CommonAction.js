/**
 * Developed By: Bharat Jograna
 * Created on: 22 July 2022
 * Common Actions to use in any module
*/

/**
 * List Of Action types To Get Data List
 */
export const GET_DATA_LIST = "GET_DATA_LIST";
export const GET_DATA_LIST_SUCCESS = "GET_DATA_LIST_SUCCESS";
export const GET_DATA_LIST_FAILURE = "GET_DATA_LIST_FAILURE";

// Redux Action To Get Data List
export const getDataList = (request) => ({
    type: GET_DATA_LIST,
    payload: request
});

// Redux Action To Get Data List Success
export const getDataListSuccess = (response) => ({
    type: GET_DATA_LIST_SUCCESS,
    payload: response
});

// Redux Action To Get Data List Failure
export const getDataListFailure = (error) => ({
    type: GET_DATA_LIST_FAILURE,
    payload: error
});
