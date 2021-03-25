/**
 * updateObject
 * @param {object} oldObject 
 * @param {object} updateProperties 
 * @returns object
 */
export const updateObject = (oldObject, updateProperties) => {
    return {
        ...oldObject,
        ...updateProperties
    };
};

/**
 * updateArray
 * @param {[]} oldArray 
 * @param {[]} updateProperties 
 * @returns array
 */
export const updateArray = (oldArray, updateProperties) => {
    return [
        ...oldArray,
        ...updateProperties
    ];
};

/**
 * checkValidity
 * @param {string} value 
 * @param {object} rules 
 * @returns boolean
 */
const checkValidity = (value, rules) => {
    let isValid = true;
    if(!rules){
        return true;
    };

    if(rules.required){
        isValid = value.trim() !== '' && isValid;
    };

    if(rules.minLength){
        isValid = value.length >= rules.minLength && isValid;
    };

    if(rules.maxLength) {
        isValid = value.length <= rules.minLength && isValid;
    };

    if(rules.isNumeric){
        const pattern = /^\d+$/;
        isValid = pattern.test(value) && isValid;
    };

    return isValid;
};

/**
 * fieldValidation
 * @param {object} form 
 * @param {string} fieldValue 
 * @param {string} identifier 
 * @returns object
 */
export const fieldValidation = (form, fieldValue, identifier) => {
    if(!form[identifier].ignoreValidation){
        const updatedFormElement = updateObject(form[identifier], {
            valid: checkValidity(fieldValue, form[identifier].validation),
            touched: true
        });
        const updatedForm = updateObject(form, {
            [identifier]: updatedFormElement
        });
        return updatedForm;
    }else{
        return form;
    }
    
};

/**
 * formValidation
 * @param {object} form 
 * @returns boolean
 */
export const formValidation = form => {
    let isValid = true;
    //console.log('isValid', isValid)
    for (const key in form) {
        //console.log('form[key].valid', form[key].valid)
        if(!form[key].ignoreValidation){
            isValid = form[key].valid && isValid;
        }
        //console.log('isValid after', isValid)
    };
    return isValid;
};

/**
 * capitalize
 * @param {string} str 
 * @returns string
 */
export const capitalize = (str) => {
    if(typeof str === 'string') {
        return str.toLowerCase().replace(/^(.)|\s+(.)/g, c => c.toUpperCase());
    } else {
        return '';
    };
};

/**
 * getLocalDate
 * @param {number} timestamp 
 * @returns string
 */
export const getLocalDate = timestamp => {
    return new Date(timestamp).toLocaleDateString();
};

/**
 * convertFileSizeMb
 * @param {number} fileSize 
 * @returns string
 */
export const convertFileSizeMb = fileSize => {
    return `${Math.round(fileSize/(1024*1024),4)}MB`;
};

/**
 * fileValidation
 * @param {object} file 
 * @param {[string]} allowExtensions 
 * @param {number} maxBytesSize 
 * @returns object
 */
export const fileValidation = (file, allowExtensions, maxBytesSize ) => {
    const fileType = file.name.split('.')[1];
    if(!allowExtensions.includes(`.${fileType}`)){
        return {
            isValid: false,
            error: `File (${file.name}) does not match with proper extension`
        };
    };
    if(file.size > maxBytesSize){
        return {
            isValid: false,
            error: `File (${file.name}) exceed maximum size`
        };
    };
    return {
        isValid: true,
        id: `${file.name}-${new Date().getMilliseconds()}`,
        fileName: file.name,
        fileType: fileType,
        fileSize: file.size,
        date: file.lastModified,
    };
};

/**
 * extractObjectPropFromList
 * @param {[object]} dataSet 
 * @param {string} key 
 * @param {string} matchVal 
 * @param {string} prop 
 * @returns string
 */
export const extractObjectPropFromList = (dataSet, key, matchVal, prop) => {
    let extractData = null;
    dataSet.forEach(data => {
        if(data[key] === matchVal){
            extractData=data[prop];
        };
    });

    return extractData;
};

/**
 * joinArrStr
 * @param {[]} array 
 * @returns string
 */
export const joinArrStr = array => {
    return array.join(' ').replace(/[ ](?=[^ ]+$)/ig,' and ');
}