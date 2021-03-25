import { REDIRECT_PATH_AUTH, REDIRECT_PATH_BASE } from '../../config/app';
import { cleanUpAuthRecord, storeAuthRecord } from '../../utils/browser-storage';
import { setRedirectPath } from '../_shared/_shared-action';
import * as actionTypes from './auth-action-type';

const mockLoginResponse = {name: 'ARKA DAS',shortName: 'AD', role:'admin', id: 'adas1234', authToken: '777298hhs900832098'};

/*** API services ***/
/**
 * auth
 * @param {object} data 
 * @returns dispatch
 */
export const auth = data => {
    return dispatch => {
        dispatch(authInit());
        // mock
        // todo: api
        storeAuthRecord(mockLoginResponse);
        dispatch(authSuccess(mockLoginResponse));
        dispatch(setRedirectPath(REDIRECT_PATH_AUTH));
    };
};

/**
 * logout
 * @returns dispatch
 */
export const logout = () => {
    return dispatch => {
        // todo: api
        dispatch(authLogout());
        cleanUpAuthRecord();
        dispatch(setRedirectPath(REDIRECT_PATH_BASE));
    };
};

/*** Actions ***/
/**
 * authInit
 * @returns object
 */
export const authInit = () => {
    return {
        type: actionTypes.AUTH_INIT
    };
};

/**
 * authSuccess
 * @param {object} user 
 * @returns object
 */
export const authSuccess = user => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        payload: user
    };
};

/**
 * authFail
 * @param {object} error 
 * @returns object
 */
export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

/**
 * authLogout
 * @returns 
 */
export const authLogout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};
