import { combineReducers, createStore, compose } from 'redux';
<<<<<<< HEAD
import audioCallReducer from './audioCall-reducer';

let reducers = combineReducers({
    audioCall: audioCallReducer
=======
import bookReducer from './book-reducer';
import authReducer from './auth-reducer'

let reducers = combineReducers({
    book: bookReducer,
    auth: authReducer
>>>>>>> book
})


let store = createStore(reducers, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))
    
window.store = store;

export default store;