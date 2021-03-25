import { API_KEY } from "../config/api";

const STORAGE_KEY = {
    AUTH_TOKEN: 'token',
    ACTIVE_USER: 'active-user',
    REMEMBER_USER: 'remember-user'
};

/**
 * storeAuthRecord
 * @param {object} activeUser 
 */
export const storeAuthRecord = activeUser => {
    sessionStorage.setItem(STORAGE_KEY.AUTH_TOKEN, activeUser[API_KEY.AUTH_TOKEN]);
    sessionStorage.setItem(STORAGE_KEY.ACTIVE_USER, JSON.stringify(activeUser));
};

/**
 * getAuthToken
 * @returns string
 */
export const getAuthToken = () => {
    return sessionStorage.setItem(STORAGE_KEY.AUTH_TOKEN);
};

/**
 * cleanUpAuthRecord
 */
export const cleanUpAuthRecord = () => {
    sessionStorage.removeItem(STORAGE_KEY.AUTH_TOKEN);
    sessionStorage.removeItem(STORAGE_KEY.ACTIVE_USER);
};

/**
 * rememberCredential
 * @param {object} credential 
 */
export const rememberCredential = credential => {
    localStorage.setItem(STORAGE_KEY.REMEMBER_USER, JSON.stringify(credential));
};

/**
 * retrieveCredential
 * @returns object
 */
export const retrieveCredential = () => {
    const user = localStorage.getItem(STORAGE_KEY.REMEMBER_USER);
    if(user){
        return JSON.parse(user);
    }else{
        return null;
    };
};

/**
 * cleanUpStoredCredential
 */
export const cleanUpStoredCredential = () => {
    localStorage.removeItem(STORAGE_KEY.REMEMBER_USER);
};
