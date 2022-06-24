/**
 * @const initialState
 * */
import {applyMiddleware, compose, createStore} from "redux";
import authReducer from "./AuthReducer";
import thunk from "redux-thunk";



const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export const store = createStore(authReducer,  compose(
    applyMiddleware(thunk),// Defered dispatch
    reduxDevtools,// Chrome Redux plugin
));
