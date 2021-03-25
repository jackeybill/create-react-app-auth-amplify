import { NOTIFICATION } from '../../config/app';
import * as actionTypes from './_shared-action-type';

/**
 * setAuthRedirectPath
 * @param {string} path 
 * @returns dispatch
 */
 export const setRedirectPath = path => {
    return {
        type: actionTypes.SET_REDIRECT_PATH,
        path: path
    };
};

/**
 * notifySuccess
 * @param {string} title 
 * @param {string} message 
 * @returns dispatch
 */
export const notifySuccess = (title, message)  => {
    return {
        type: actionTypes.APP_NOTIFICATION_SET,
        notification: {
            identifier: NOTIFICATION.SUCCESS,
            title: title,
            message: message
        }
    };
};

/**
 * notifyError
 * @param {string} title 
 * @param {string} message 
 * @returns dispatch
 */
export const notifyError = (title, message)  => {
    return {
        type: actionTypes.APP_NOTIFICATION_SET,
        notification: {
            identifier: NOTIFICATION.ERROR,
            title: title,
            message: message
        }
    };
};

/**
 * notifyWarning
 * @param {string} title 
 * @param {string} message 
 * @returns dispatch
 */
export const notifyWarning = (title, message)  => {
    return {
        type: actionTypes.APP_NOTIFICATION_SET,
        notification: {
            identifier: NOTIFICATION.WARNING,
            title: title,
            message: message
        }
    };
};

/**
 * notifyInfo
 * @param {string} title 
 * @param {string} message 
 * @returns dispatch
 */
export const notifyInfo = (title, message) => {
    return {
        type: actionTypes.APP_NOTIFICATION_SET,
        notification: {
            identifier: NOTIFICATION.INFO,
            title: title,
            message: message
        }
    };
};

/**
 * notifyReset
 * @returns dispatch
 */
export const notifyReset = () => {
    return {
        type: actionTypes.APP_NOTIFICATION_RESET
    };
};