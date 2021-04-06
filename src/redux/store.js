import { combineReducers, createStore, compose } from 'redux';
import sprintReducer from './sprint-reducer';
import savannahReducer from './savannahReducer/savannahReducer';
import audioCallReducer from './audioCall-reducer';
import bookReducer from './book-reducer';
import authReducer from './auth-reducer';
import settingsReducer from './settings-reducer';
import authorGameReducer from './authorGame-reducer';

let reducers = combineReducers({
    audioCall: audioCallReducer,
    book: bookReducer,
    auth: authReducer,
    savannah: savannahReducer,
    sprint: sprintReducer,
    settings: settingsReducer,
    authorGame: authorGameReducer
})

let store = createStore(reducers, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

window.store = store;

export default store;