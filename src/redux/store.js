import { combineReducers, createStore, compose } from 'redux';
import sprintReducer from './sprint-reducer';

let reducers = combineReducers({
    sprint: sprintReducer,
})

let store = createStore(reducers, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export default store;