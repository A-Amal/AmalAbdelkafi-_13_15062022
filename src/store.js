/**
 * @const initialState
 * */
import {createStore} from "redux";


const initialState ={
    isCanceled :false,
    user:{},
    token : null
}
/**
 * reducer
 * @param {object} state
 * @param {object} action
 * @return {object}
 * */
function reducer(state = initialState, action) {
    return state;
}

export const store = createStore(reducer);
