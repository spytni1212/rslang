import { combineReducers, createStore, compose } from 'redux';

let reducers = combineReducers({

})

let store = createStore(reducers, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export default store;