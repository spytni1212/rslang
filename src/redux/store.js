import { combineReducers, createStore, compose } from 'redux';
import audioCallReducer from './audioCall-reducer';
import bookReducer from './book-reducer';
import authReducer from './auth-reducer'


let reducers = combineReducers({
    audioCall: audioCallReducer,
    book: bookReducer,
    auth: authReducer
})


let store = createStore(reducers, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))
    
window.store = store;

export default store;