/**
 * Auth selector
 * @param {Object} state
 * @returns {Function}
 */
import authReducer from "./AuthReducer";

export const authSelector = (state) => (authReducer(state, {}))
