import {AUTH_LOADING, AUTH_LOGIN, AUTH_LOGOUT, AUTH_SET_USER, AUTH_UPDATE_USER, AUTH_ERROR} from "./AuthActions";

const authState = {
    isAuthenticated: false,
    user: {},
    token: '',
    loading: false,
    errorAuth: false
}

/**
 * reducer
 * @param {object} state
 * @param {object} action
 * @return {object}
 * */
const authReducer = (state = authState, action) =>{
    switch (action.type) {
        //login user
        case AUTH_LOGIN:
            console.log(state)
            return {
                ...state,
                isAuthenticated :true,
                token : action.payload.token
            }
        //logout user
        case AUTH_LOGOUT:
            return {
                ...state,
                isAuthenticated :false,
                user :{},
                token : null
            }
        //set user profile
        case AUTH_SET_USER:
            return {
                ...state,
                user: action.payload.user
            }
        // Toggle login user state
        case AUTH_LOADING:
            return {
                ...state,
                loading: action.payload,
            }
        case AUTH_ERROR:
            return {
                ...state,
                errorAuth: action.payload
            }

        // Update profile information
        case AUTH_UPDATE_USER:
            return {
                ...state,
                user: action.payload.user,
            }
        // Default
        default:
            return state

    }

}

export default authReducer;
