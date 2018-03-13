/**
 * Created by swapnils on 09/03/18.
 */
import {combineReducers} from 'redux';
import FactReducer from './FactReducer';

export default combineReducers({
    fact: FactReducer
});