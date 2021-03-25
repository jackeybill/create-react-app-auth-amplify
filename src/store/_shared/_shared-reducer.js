import * as actionTypes from './_shared-action-type';
import { REDIRECT_PATH_BASE } from '../../config/app';
import { updateObject } from '../../utils/app';

const initialState = {
    redirectPath: REDIRECT_PATH_BASE,
    notifyType: null,
    notifyTitle: null,
    notifyMsg: null
};

/**
 * setAuthRedirectPath
 * @param {initialState} state 
 * @param {{type: string, path: string}} action 
 * @returns updatedState
 */
const setRedirectPath = (state, action) => {
    return updateObject(state, {redirectPath: action.path});
};

/**
 * setNotification
 * @param {initialState} state 
 * @param {{type: string, notification: {identifier: string, notifyTitle: string, notifyMsg: string}}} action 
 * @returns updatedState
 */
const setNotification = (state, action) => {
    return updateObject(state, {notifyType: action.notification.identifier, notifyTitle: action.notification.title, notifyMsg: action.notification.message });
};

/**
 * resetNotification
 * @param {initialState} state 
 * @returns updatedState
 */
const resetNotification = state => {
    return updateObject(state, {notifyType: null, notifyTitle: null, notifyMsg: null });
};

/**
 * reducer
 * @param {initialState} state 
 * @param {any} action 
 * @returns initialState
 */
const sharedReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_REDIRECT_PATH: return setRedirectPath(state, action);
        case actionTypes.APP_NOTIFICATION_SET: return setNotification(state, action);
        case actionTypes.APP_NOTIFICATION_RESET: return resetNotification(state);
        default: 
            return state;
    };
};

export default sharedReducer;
