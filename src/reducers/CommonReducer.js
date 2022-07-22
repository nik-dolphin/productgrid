/**
 * Developed By: Bharat Jograna
 * Created on: 22 July 2022
 * Common Reducers to use in any module
*/
import {

    // List Of Action types To Get Data List
    GET_DATA_LIST,
    GET_DATA_LIST_SUCCESS,
    GET_DATA_LIST_FAILURE,

} from '../actions';

/*
* Initial State
*/
const INIT_STATE = {
    loading: false,
	List: [],
}

//Check Action for Common use in project...
export default (state,action) => {

	if (typeof state === 'undefined') {
        return INIT_STATE
	}

    switch (action.type) {

        // List Of Action types To Get Data List
        case GET_DATA_LIST:
            return { ...state, List: [] };

        case GET_DATA_LIST_SUCCESS:
            return { ...state, List: action.payload };

        case GET_DATA_LIST_FAILURE:
            return { ...state, List: action.payload };

        default:
            return { ...state };
    }
}