import React, { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { CASE_INTAKE_TAB } from '../../../config/app';
import { BUTTON } from '../../../config/field';
import { UPLOAD_DOCUMENT_FORM_CONFIG } from '../../../config/form';
import { submitDocUploadForm } from '../../../store/case-intake/case-intake-action';
import { extractObjectPropFromList, fieldValidation, formValidation, updateObject } from '../../../utils/app';
import Button from '../../_shared/elements/Button';
import DropDown from '../../_shared/elements/DropDown';
import FileUpload from '../../_shared/elements/FileUpload';
import Input from '../../_shared/elements/Input';


const UploadDocument = props => {

    const [uploadDocForm, setUploadDocForm] = useState(null);
    const [uploadDocFormValue, setUploadDocFormValue] = useState(null);
    const [validForm, setFormValidity] = useState(false);
    const [browsedFileList, setBrowsedFileList] = useState([]);
    const [allowFileExtensions, setAllowFileExtension] = useState([]);
    const [isLoading, setLoaded] = useState(false);
    const [reloadFileUpload, setReloadFileUpload] = useState(false);

    /**
     * initFormValue
     */
    const initFormValue = useCallback((form) => {
        let uploadDocFormInitValue = {};

        for (const key in form) {
            if(!form[key].ignoreValueCapture){
                if (form[key].hasDefaultPropsValue) {
                    const value = props[form[key].propsKey][0] && props[form[key].propsKey][0].value;
                    if(value){
                        uploadDocFormInitValue[key] = value;
                    };
                } else {
                    uploadDocFormInitValue[key] = '';
                };
            };
        };
        setUploadDocFormValue(uploadDocFormInitValue);
    },[props]);

    useEffect(() => {
        if (!isLoading) {
            let uploadDocForm = { ...UPLOAD_DOCUMENT_FORM_CONFIG };
            initFormValue(uploadDocForm);

            setUploadDocForm(uploadDocForm);
            setLoaded(false);

            const allowFileExt = (props.channelList && props.channelList[0] && props.channelList[0].allowFileExtensions) || [];
            setAllowFileExtension(allowFileExt);
            setBrowsedFileList([]);
            setReloadFileUpload(true);
        };
    }, [props, isLoading, initFormValue]);

    /**
    * fieldChangeHandler
    * @param {string} value 
    * @param {string} identifier 
    */
    const fieldChangeHandler = (fieldValue, identifier) => {
        if(identifier === 'channel'){
            const fileExtension = extractObjectPropFromList(props.channelList, 'value', fieldValue, 'allowFileExtensions');
            setAllowFileExtension(fileExtension);
            setBrowsedFileList([]);
            setReloadFileUpload(true);
        }else{
            setReloadFileUpload(false);
        };
        const updatedForm = fieldValidation(uploadDocForm, fieldValue, identifier);
        setUploadDocForm(updatedForm);
        console.log('updatedForm', updatedForm)
        const validForm = formValidation(updatedForm);
        console.log('validForm field', validForm)
        setFormValidity(validForm);
        setUploadDocFormValue(updateObject(uploadDocFormValue, { [identifier]: fieldValue }));
    };

    /**
     * handleFileBrowsed
     * @param {object} files 
     */
    const handleFileBrowsed = files => {
        setBrowsedFileList(files);
        setReloadFileUpload(false);
    };

    /**
     * handleSubmit
     * @param {object} event 
     */
    const handleSubmit = event => {
        event.preventDefault();
        console.log('handleSubmit', validForm, uploadDocForm, uploadDocFormValue, browsedFileList)
        if (validForm && browsedFileList.length > 0) {
            props.submitForm(uploadDocFormValue, browsedFileList);
        };
        initFormValue(uploadDocForm);
        setBrowsedFileList([]);
        setReloadFileUpload(true);
    };

    /**
     * resetForm
     * @param {object} event 
     */
    const resetForm = event => {
        event.preventDefault();
        initFormValue(uploadDocForm);
        setBrowsedFileList([]);
        setReloadFileUpload(true);
    }

    return (
        <React.Fragment>
            <h5 className='a-py-20 a-h5 font-weight-bold'>{CASE_INTAKE_TAB[0].name}</h5>
            <form className='a-pb-40' onSubmit={handleSubmit}>
                {
                    uploadDocForm ?
                        <React.Fragment>
                            <div className='row'>
                                <div className='col-3'>
                                    <DropDown
                                        id={uploadDocForm.channel.id}
                                        name={uploadDocForm.channel.name}
                                        value={uploadDocFormValue.channel}
                                        options={props.channelList}
                                        dropdownChanged={event => fieldChangeHandler(event.target.value, 'channel')} />
                                </div>
                                <div className='col-3 offset-1'>
                                    <Input
                                        id={uploadDocForm.memberId.id}
                                        name={uploadDocForm.memberId.name}
                                        type={uploadDocForm.memberId.type}
                                        value={uploadDocFormValue.memberId}
                                        inputChanged={event => fieldChangeHandler(event.target.value, 'memberId')} />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-12'>
                                    <FileUpload id={uploadDocForm.file.id}
                                        allowExtensions={allowFileExtensions}
                                        maxBytesSize={uploadDocForm.file.fileValidation.maxBytesSize}
                                        maxFileCount={uploadDocForm.file.fileValidation.maxFileCount}
                                        reload = {reloadFileUpload}
                                        validFileBrowsed={handleFileBrowsed} />
                                </div>
                            </div>
                            <div className='row a-my-20'>
                                <div className='col-6 text-right pr-1'>
                                    <Button id='uploadBtn'
                                        externalClass='h-100 font-weight-normal a-btn-lg'
                                        type='submit'>
                                        {BUTTON.UPLOAD}
                                    </Button>
                                </div>
                                <div className='col-6 text-left pl-1'>
                                    <Button id='uploadBtn'
                                        domain='secondary'
                                        externalClass='h-100 font-weight-normal a-btn-lg'
                                        buttonClicked={resetForm}
                                    >{BUTTON.CANCEL}</Button>
                                </div>
                            </div>
                        </React.Fragment> : null
                }
            </form>
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        channelList: state.caseIntake.channelList,
        caseFileList: state.caseIntake.caseFileList
    };
};

const mapDispatchToProps = dispatch => {
    return {
        submitForm: (formData, fileData) => dispatch(submitDocUploadForm(formData, fileData))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(UploadDocument);