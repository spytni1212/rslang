import { combineReducers, createStore, compose } from 'redux';
import savannahReducer from './savannahReducer/savannahReducer'

let reducers = combineReducers({
    savannah:savannahReducer,
})

let store = createStore(reducers, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export default store;