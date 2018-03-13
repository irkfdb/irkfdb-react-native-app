/**
 * Created by swapnils on 09/03/18.
 */
import {
    FETCHING_RANDOM_FACT,
    FETCHING_RANDOM_FACT_SUCCESS,
    FETCHING_RANDOM_FACT_FAILURE
} from './../configs/constants';

const initialState = {
    isFetching: false,
    data: null,
    hasError: false,
    errorMessage: null
};

export default function (state = initialState, action) {
    console.log("action.type", action.type);
    switch (action.type) {
        case FETCHING_RANDOM_FACT:
            console.log("Init Call", action);
            return Object.assign({}, state, {
                isFetching: true,
                data: null,
                hasError: false,
                errorMessage: null
            });
        case FETCHING_RANDOM_FACT_SUCCESS:
            console.log("Fact Reducer", action);
            return Object.assign({}, state, {
                isFetching: false,
                data: action.payload,
                hasError: false,
                errorMessage: null
            });
        case FETCHING_RANDOM_FACT_FAILURE:
            console.log("Error", action);
            return Object.assign({}, state, {
                isFetching: false,
                data: action.payload,
                hasError: true,
                errorMessage: action.err
            });
        default:
            return state;
    }
};
