import * as actionTypes from './case-intake-action-type';
import { updateObject } from '../../utils/app';

const initialState = {
    channelList: [],
    caseFileList:[],
    uploadDocumentForm: null,
    error: null
};

/**
 * docUploadFormInit
 * @param {initialState} state 
 * @returns updatedState
 */
const docUploadFormInit = state => {
    return updateObject(state, { channelList: [], caseFileList: [], uploadDocumentForm: null});
};

/**
 * docUploadFormList
 * @param {initialState} state 
 * @param {{type: string, channels: [], caseFileList: []}} action 
 * @returns updatedState
 */
const docUploadFormList = (state, action) => {
    return updateObject(state, { channelList: action.channels, caseFileList: action.caseFiles});
};

/**
 * reducer
 * @param {initialState} state 
 * @param {any} action 
 * @returns initialState
 */
const caseIntakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DOCUMENT_UPLOAD_FORM_INIT: return docUploadFormInit(state);
        case actionTypes.DOCUMENT_UPLOAD_FORM_LIST: return docUploadFormList(state, action);
        default:
            return state;
    };
};

export default caseIntakeReducer;
