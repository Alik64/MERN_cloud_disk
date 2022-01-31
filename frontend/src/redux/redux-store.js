import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import fileReducer from './fileReducer';
import uploadReducer from './uploadReducer';
import userReducer from './userReducer';

const reducers = combineReducers({
    user: userReducer,
    files: fileReducer,
    uploader: uploadReducer
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))


export default store