import * as actionTypes from './case-intake-action-type';
import { notifyReset, notifySuccess } from '../_shared/_shared-action';

/*** API Services ***/
/**
 * docUploadFormInit
 * @returns dispatch
 */
export const docUploadFormInit = () => {
    return dispatch => {
        dispatch(notifyReset());
        dispatch(docUploadInit());
        // mock
        const channels = [
            {
                name: 'Fax',
                value: 'fax',
                allowFileExtensions: ['.pdf', '.jpeg']
            },{
                name: 'Mail',
                value: 'mail',
                allowFileExtensions: ['.pdf', '.jpeg']
            },{
                name: 'E-Mail',
                value: 'email',
                allowFileExtensions: ['.pdf', '.jpeg']
            },{
                name: 'Phone',
                value: 'phone',
                allowFileExtensions: ['.pdf', '.jpeg', '.txt']
            }
        ];
        const caseFiles = [
            {
                name: 'Case File 1',
                value: 'case-file-1'
            },{
                name: 'Case File 2',
                value: 'case-file-2'
            },{
                name: 'Case File 3',
                value: 'case-file-3'
            }
        ];
        // todo: api
        dispatch(docUploadList(channels,caseFiles));
    };
};

/**
 * submitDocUploadForm
 * @param {object} formData 
 * @param {[object]} fileData 
 * @returns dispatch
 */
export const submitDocUploadForm = (formData, fileData) => {
    return dispatch => {
    console.log('submitDocUploadForm', formData, fileData)
    // todo: api
    // note: notification message should come from api
    dispatch(notifySuccess('Case Intake - Upload Document','Successfully upload all files'));
    //dispatch(notifyError('Case Intake - Upload Document','Failed to upload file'));
    };
};

/*** Actions ***/
/**
 * docUploadInit
 * @returns docUploadList
 */
export const docUploadInit = () => {
    return {
        type: actionTypes.DOCUMENT_UPLOAD_FORM_INIT
    };
};

/**
 * docUploadList
 * @param {[]} channelList 
 * @param {[]} caseFileList 
 * @returns object
 */
export const docUploadList = (channelList, caseFileList) => {
    return {
        type: actionTypes.DOCUMENT_UPLOAD_FORM_LIST,
        channels: channelList,
        caseFiles: caseFileList
    };
};