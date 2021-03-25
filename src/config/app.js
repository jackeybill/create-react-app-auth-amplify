export const APP_ROUTE_PATH = {
    LOGIN: '/',
    FORGOT_PASSWORD: '/',
    CASE_INTAKE: '/case-intake',
    PROCESSING_HISTORY: '/processing-history',
    CLASSIFICATION_SUMMARY: '/classification-summary'
};

export const REDIRECT_PATH_BASE = APP_ROUTE_PATH.LOGIN;
export const REDIRECT_PATH_AUTH = APP_ROUTE_PATH.CASE_INTAKE;

export const APP_TITLE = 'Appeals & Grievances';
export const APP_FOOTER = '© 2021 PwC. All rights reserved';

export const DATE_FORMAT = {
    HEADING: 'MM/DD/YYYY'
};

export const NOTIFICATION = {
    SUCCESS: 'success',
    ERROR: 'error',
    WARNING: 'warning',
    INFO: 'info',
    RESET: 'app-notify-reset'
};

export const APP_NAV_MENU = [
    {
        id: 'case-intake',
        name: 'CASE INTAKE',
        target: APP_ROUTE_PATH.CASE_INTAKE
    }, {
        id: 'processing-history',
        name: 'PROCESSING HISTORY',
        target: APP_ROUTE_PATH.PROCESSING_HISTORY
    }, {
        id: 'classification-summary',
        name: 'CLASSIFICATION SUMMARY',
        target: APP_ROUTE_PATH.CLASSIFICATION_SUMMARY
    }
];

export const CASE_INTAKE_TAB = [
    {
        id: 'upload-documents',
        name: 'UPLOAD DOCUMENTS'
    }, {
        id: 'intake-summary',
        name: 'INTAKE SUMMARY'
    }
];

export const CASE_INTAKE_PAGE_TITLE='Case Intake Overview';
