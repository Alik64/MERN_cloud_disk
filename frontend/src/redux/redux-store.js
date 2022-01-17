import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import fileReducer from './fileReducer';
import userReducer from './userReducer';

const reducers = combineReducers({
    user: userReducer,
    files: fileReducer
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))


export default store