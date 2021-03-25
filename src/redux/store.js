import { combineReducers, createStore, compose } from 'redux';
import audioCallReducer from './audioCall-reducer';

let reducers = combineReducers({
    audioCall: audioCallReducer
})

let store = createStore(reducers, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export default store;