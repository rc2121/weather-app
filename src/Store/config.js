import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import reducer from '../Reducers';
import { initState } from '../Reducers/initialState';

const composeEnhancer = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

let enhancer = composeEnhancer(applyMiddleware(thunk));

export default createStore(reducer, initState, enhancer);