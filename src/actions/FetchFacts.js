/**
 * Created by swapnils on 09/03/18.
 */
import axios from 'axios';
import {
    IRKFDB_API_URL,
    FETCHING_RANDOM_FACT,
    FETCHING_RANDOM_FACT_SUCCESS,
    FETCHING_RANDOM_FACT_FAILURE
} from './../configs/constants';

export default function getRandomFact() {
    console.log("GETTING RANDOM FACT");
    return dispatch => {
        console.log("GETTING RANDOM FACT - INIT");
        dispatch({type: FETCHING_RANDOM_FACT});
        return axios.get(IRKFDB_API_URL)
            .then(response => {
                console.log("GETTING RANDOM FACT - SUCCESS");
                dispatch({
                    type: FETCHING_RANDOM_FACT_SUCCESS,
                    payload: response.data.resultSet.data[0]
                })
            })
            .catch(error => {
                console.log("GETTING RANDOM FACT - FAILURE");
                dispatch({
                    type: FETCHING_RANDOM_FACT_FAILURE,
                    payload: error.data
                })
            })
    };
};
