import { FORM_FIELD_TYPE } from './field';


export const LOGIN_FORM_CONFIG = {
    username: {
        fieldType: FORM_FIELD_TYPE.INPUT,
        id: 'fUsername',
        type: 'text',
        name: 'username',
        validation: {
            required: true
        },
        valid: false,
        touched: false
    },
    password: {
        fieldType: FORM_FIELD_TYPE.INPUT,
        id: 'fPassword',
        type: 'password',
        name: 'password',
        validation: {
            required: true
        },
        valid: false,
        touched: false
    }
};

export const UPLOAD_DOCUMENT_FORM_CONFIG = {
    channel: {
        fieldType: FORM_FIELD_TYPE.DROPDOWN,
        id: 'fChannel',
        name: 'Select Channel',
        ignoreValidation: true,
        hasDefaultPropsValue: true,
        propsKey: 'channelList'
    },
    memberId: {
        fieldType: FORM_FIELD_TYPE.INPUT,
        id: 'fMemberId',
        name: 'Member Id',
        validation:{
            required: true
        },
        valid: false,
        touched: false
    },
    file: {
        fieldType: FORM_FIELD_TYPE.FILE_UPLOAD,
        id: 'fBrowse',
        ignoreValidation: true,
        fileValidation: {
            maxBytesSize: 10485760,
            maxFileCount: 10
        },
        ignoreValueCapture: true
    }
};