import * as actionTypes from './auth-action-type';
import { updateObject } from '../../utils/app';

const initialState = {
    user: null,
    error: null,
    loading: false,
    isLoggedOut: false
};

/**
 * authInit
 * @param {initialState} state 
 * @returns updatedState
 */
const authInit = state => {
    return updateObject(state, { error: null, loading: true, isLoggedOut: false });
};

/**
 * authSuccess
 * @param {initialState} state 
 * @param {{type: string, payload: object}} action 
 * @returns updatedState
 */
const authSuccess = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: false,
        user: action.payload
    });
};

/**
 * authFail
 * @param {initialState} state 
 * @param {{type: string, error: object}} action 
 * @returns updatedState
 */
const authFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error
    });
};

/**
 * authLogout
 * @param {initialState} state 
 * @param {{type: string, payload: object}} action 
 * @returns updatedState
 */
const authLogout = (state, action) => {
    return updateObject(state, {
        user: null,
        isLoggedOut: true
    });
};

/**
 * reducer
 * @param {initialState} state 
 * @param {any} action 
 * @returns initialState
 */
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_INIT: return authInit(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        default:
            return state;
    };
};

export default authReducer;
