/**
 * Created by swapnils on 09/03/18.
 */
import {
    createStore,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

const Store = createStore(
    reducers,
    applyMiddleware(thunk)
);

export default Store;