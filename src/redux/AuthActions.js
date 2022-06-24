import axios from "axios"


/**
 * AUTH
 */
export const AUTH_LOADING = 'AUTH_LOADING'
export const AUTH_LOGIN = 'AUTH_LOGIN'
export const AUTH_LOGOUT = 'AUTH_LOGOUT'
export const AUTH_SET_USER = 'AUTH_SET_USER'
export const AUTH_UPDATE_USER = 'AUTH_UPDATE_USER'

/**
 * Set authorization token in axios header
 * @param {string} token
 * @return {void}
 */
export default function setAuthorizationToken(token) {
    if (token) axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    else delete axios.defaults.headers.common['Authorization']
}

/**
 * Logout
 * @returns {Function}
 */
export const authLogout = () => async dispatch => {
    localStorage.removeItem('token')
    dispatch({ type: AUTH_LOGOUT })
}
/**
 * Login
 * @param {String} userCompt.email
 * @param {String} userCompt.password
 * @param {Boolean} userCompt.remember
 * @returns {Function}
 * @param userCompt
 */
export const authLogin = userCompt => async dispatch => {
    try{
        //start request
        dispatch({ type:AUTH_LOADING, payload: true})
        //check userCompt and get jwt
        const responseLogin = await axios.post("/user/login", userCompt);
        const token = responseLogin.data.body.token;
        //remember is checked
        if(userCompt.remember)
            localStorage.setItem('token', token);
        else
            localStorage.removeItem('token')
        //set axios token
        setAuthorizationToken(token);
        //end request
        dispatch({type:AUTH_LOADING, payload:false})
        dispatch({type:AUTH_LOGIN, payload:{token}})
        const responseProfile = await axios.post('/user/profile')
        const user = responseProfile.data.body
        console.log(user)
        dispatch({type:AUTH_SET_USER, payload:{user}})
        console.log(user)
    }catch (error){
        console.log(error)
    }
}
/**
 * Auto login
 * @param {String} token
 * @returns {Function}
 */
export const authAutoLogin = token => async dispatch => {
    try {
        setAuthorizationToken(token)
        dispatch({ type: AUTH_LOGIN, payload: {token} })
        const response = await axios.post('/user/profile')
        const user = response.data.body
        dispatch({ type: AUTH_SET_USER, payload: {user} })
    } catch(error) {
        console.log(error)
    }
}
/**
 * Update profile information
 * @param {object} formData
 * @param {String} formData.firstName
 * @param {String} formData.lastName
 * @returns {Function}
 */
export const authUpdateProfile = formData => async dispatch => {
    try {
        const response = await axios.put('/user/profile', formData)
        const user = response.data.body
        dispatch({ type: AUTH_UPDATE_USER, payload: {user} })
    } catch (error) {
        console.log((error))
    }
}
