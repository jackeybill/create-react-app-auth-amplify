import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { convertFileSizeMb, fileValidation, getLocalDate, joinArrStr, updateArray } from '../../../utils/app';

const FileUpload = props => {

    const [validBrowsedFileList, setValidBrowsedFileList] = useState([]);
    const [browsedFileList, setBrowsedFileList] = useState([]);
    const [fileLimitError, setFileLimitError] = useState(false);

    const fileUploadEl = useRef(null);

    useEffect(() => {
        props.validFileBrowsed(validBrowsedFileList);
        if(props.reload){
            setBrowsedFileList([]);
            setValidBrowsedFileList([]);
            setFileLimitError(false);
        }
    }, [props, validBrowsedFileList]);

    /**
     * handleDragDrop
     * @param {object} event 
     */
    const handleDragDrop = event => {
        event.preventDefault();
        event.stopPropagation();
        
        const files = event.dataTransfer.files;
        if(files.length > 0){
            processFileBrowsing(files);
        }
    }

    /**
     * handleFileBrowse
     * @param {object} event 
     */
    const handleFileBrowse = event => {
        event.preventDefault();
        event.stopPropagation();
        
        const files = event.target.files;
        if(files.length > 0){
            processFileBrowsing(files);
        }
    };

    /**
     * processFileBrowsing
     * @param {[FileList]} files 
     */
    const processFileBrowsing = files => {
        const tempFileList = [];
        const validFileList = [];

        if (validBrowsedFileList.length <= props.maxFileCount) {
            let fileCount = validBrowsedFileList.length;

            for (const key in files) {
                const file = files[key];
                    if (file.type) {
                        const validateFile = fileValidation(file, props.allowExtensions, props.maxBytesSize);
                        if (validateFile.isValid) {
                            fileCount = fileCount + 1;
                            if (fileCount <= props.maxFileCount) {
                                validFileList.push({
                                    file: file,
                                    id: validateFile.id
                                });
                            };
                        };
                        if (fileCount <= props.maxFileCount) {
                            tempFileList.push(validateFile);
                        };
                    };
                
            };

            const updatedBrowsedFileList = updateArray(browsedFileList, tempFileList);
            const updatedValidBrowsedFileList = updateArray(validBrowsedFileList, validFileList);

            setBrowsedFileList(updatedBrowsedFileList);
            setValidBrowsedFileList(updatedValidBrowsedFileList);

            if (fileCount > props.maxFileCount) {
                setFileLimitError(true);
            } else {
                setFileLimitError(false);
            };
        } else {
            setFileLimitError(true);
        };
    }

    /**
     * handleFileRemove
     * @param {number} index 
     */
    const handleFileRemove = index => {
        const tempFileList = browsedFileList;
        const validFileList = validBrowsedFileList;

        let _index = -1;
        const removalFile = tempFileList[index];
        for (let i = 0; i < validFileList.length; i++) {
            const file = validFileList[i];
            if (file.id === removalFile.id) {
                _index = i;
                i = validFileList.length;
            };
        };
        browsedFileList.splice(index, 1);
        validFileList.splice(_index, 1);
        const updatedBrowsedFileList = [...browsedFileList];
        const updatedValidBrowsedFileList = [...validFileList];

        setBrowsedFileList(updatedBrowsedFileList);
        setValidBrowsedFileList(updatedValidBrowsedFileList);

        setFileLimitError(false);
    };

    /**
     * handleFileErrorRemove
     * @param {number} index 
     */
    const handleFileErrorRemove = index => {

        browsedFileList.splice(index, 1);
        const updatedBrowsedFileList = [...browsedFileList];

        setBrowsedFileList(updatedBrowsedFileList);
    };

   

    return (
        <div className='third-panel a-mt-50 d-table w-100 text-center'>
            <div className='a-single-upload-file white' id='single-upload2'
            onDragOver={handleDragDrop}
            onDrop={handleDragDrop}>
                <input type='file'
                    ref={fileUploadEl}
                    className='upload-drop w-100'
                    id='multiple-file-target'
                    aria-label='Press to select file'
                    onChange={handleFileBrowse}
                    multiple
                    hidden />
                <label htmlFor='multiple-file-target'
                    className='a-g-file-upload upload-drop upload-drop-fourth-panel w-100 p-0'>
                    <span>
                        <span className='appkiticon fa-4x icon-cloud-outline'></span>
                        <br />
                        <span className='a-font-18'>Drag and drop, or <span className='browse-span'>browse</span> your files</span>
                        <br />
                        <br />
                        <span className='a-font-14'>only {joinArrStr(props.allowExtensions)} file</span>
                        <br />
                        <span className='a-font-14'>Max file size is
                        <span className='browse-span'>&nbsp;{convertFileSizeMb(props.maxBytesSize)}&nbsp;</span>
                        and max no. of files is {props.maxFileCount}</span>
                    </span>
                </label>
                {
                    browsedFileList.map((file, index) => {
                        return (
                            file.isValid ?
                                <div className='upload-success' key={index}>
                                    <span className='a-badge a-badge-success text-uppercase'>
                                        <span className='fileType'>{file.fileType}</span></span>
                                    <span className='fileSpan'>
                                        <span className='fileName'>{file.fileName}</span>
                                        <span className='fileSize'>{convertFileSizeMb(file.fileSize)}</span>
                                    </span>
                                    <span className='date'>{getLocalDate(file.date)}</span>
                                    <span className='icon-wrapper'>
                                        <button className='appkiticon icon-circle-delete-outline tooltip-link'
                                            title='' data-placement='top'
                                            type='button'
                                            data-toggle='tooltip'
                                            data-original-title='Delete'
                                            data-container='body'
                                            onClick={() => handleFileRemove(index)}></button>
                                    </span>
                                </div> :
                                <div className='upload-error' key={index}>
                                    <span className='a-badge a-badge-error text-uppercase'>Error</span>
                                    <span className='message'>{file.error}</span>
                                    <span className='icon-wrapper'>
                                        <button className='appkiticon icon-circle-delete-outline tooltip-link'
                                            title='' data-placement='top'
                                            type='button'
                                            data-toggle='tooltip'
                                            data-original-title='Delete'
                                            data-container='body'
                                            onClick={() => handleFileErrorRemove(index)}></button>
                                    </span>
                                </div>
                        );
                    })
                }
                {
                    fileLimitError ?
                        <div className='upload-error'>
                            <span className='a-badge a-badge-error text-uppercase'>Error</span>
                            <span className='message'>You have crossed maximum file count</span>
                            <span className='icon-wrapper'>
                                <button className='appkiticon icon-circle-delete-outline tooltip-link'
                                    title='' data-placement='top'
                                    type='button'
                                    data-toggle='tooltip'
                                    data-original-title='Delete'
                                    data-container='body'
                                    onClick={() => setFileLimitError(false)}></button>
                            </span>
                        </div> : null
                }
            </div>
        </div>
    );
};

FileUpload.propTypes = {
    id: PropTypes.string.isRequired,
    allowExtensions: PropTypes.array.isRequired,
    maxBytesSize: PropTypes.number.isRequired,
    maxFileCount: PropTypes.number.isRequired,
    reload: PropTypes.bool,
    validFileBrowsed: PropTypes.func.isRequired
};

export default FileUpload;