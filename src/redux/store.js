import { combineReducers, createStore, compose } from 'redux';
import bookReducer from './book-reducer';

let reducers = combineReducers({
    book: bookReducer,

})

let store = createStore(reducers, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export default store;