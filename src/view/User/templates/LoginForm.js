import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Button from '../../_shared/elements/Button';
import Checkbox from '../../_shared/elements/Checkbox';
import Input from '../../_shared/elements/Input';
import AppLink from '../../_shared/elements/AppLink';
import * as action from './../../../store/auth/index';
import { fieldValidation,formValidation, updateObject } from '../../../utils/app';
import { LOGIN_FORM_CONFIG } from './../../../config/form';
import { BUTTON, FORGOT_PASSWORD, REMEMBER_ME } from '../../../config/field';
import { cleanUpStoredCredential, rememberCredential, retrieveCredential } from '../../../utils/browser-storage';
import { APP_ROUTE_PATH } from '../../../config/app';


const LoginForm = props => {
    
    const [loginForm, setLoginForm] = useState(null);
    const [loginFormValue, setLoginFormValue] = useState(null);
    const [validForm, setFormValidity] = useState(false);
    const [isRememberMe, setRememberMe] = useState(false);
    
    useEffect(() => {
        const hasStoredCredential = retrieveCredential();
        let loginForm = {...LOGIN_FORM_CONFIG};
        let loginFormInitValue = {};

        if (hasStoredCredential && hasStoredCredential.isRememberMe) {
            loginFormInitValue = { ...hasStoredCredential.credential }
            for(const key in loginFormInitValue){
                const updatedLoginForm = fieldValidation(loginForm, loginFormInitValue[key], key);
                loginForm = updatedLoginForm;
            };
            const validForm = formValidation(loginForm);
            setFormValidity(validForm);
            setRememberMe(hasStoredCredential.isRememberMe);
        } else {
            for (const key in loginForm) {
                loginFormInitValue[key] = '';
            };
        };
        setLoginFormValue(loginFormInitValue);
        setLoginForm(loginForm);
    }, []);

    /**
     * fieldChangeHandler
     * @param {string} value 
     * @param {string} identifier 
     */
    const fieldChangeHandler = (fieldValue, identifier) => {
        const updatedLoginForm = fieldValidation(loginForm, fieldValue, identifier);
        setLoginForm(updatedLoginForm);
        const validForm = formValidation(updatedLoginForm);
        setFormValidity(validForm);
        setLoginFormValue(updateObject(loginFormValue, { [identifier]: fieldValue }));
    };

    /**
     * handleSubmit
     * @param {any} event 
     */
    const handleSubmit = event => {
        event.preventDefault();
        //remember credential functionality
        if (isRememberMe) {
            rememberCredential({ credential: loginFormValue, isRememberMe: isRememberMe });
        }else{
            cleanUpStoredCredential();
        };
        if (validForm) {
            props.login(loginFormValue);
        };
    };

    const formElementArray = [];
    for (const key in loginForm) {
        formElementArray.push({
            key: key,
            field: loginForm[key]
        });
    };

    return (
        <form className='position-relative' onSubmit={event => handleSubmit(event)}>
            <div className='row a-g-login-form-field a-pr-20'>
                <div className='col-12'>
                    {formElementArray.map(element => {
                        const { field } = element;
                        return (
                            <div className='a-mx-20 a-my-10' key={element.key}>
                                <Input
                                    id={field.id}
                                    name={field.name}
                                    type={field.type}
                                    value={loginFormValue[element.key]}
                                    inputChanged={event => fieldChangeHandler(event.target.value, element.key)} />
                            </div>

                        )
                    })}
                </div>
            </div>
            <div className='row a-mt-20 a-mx-20 a-pr-20'>
                <div className='col-6 p-0'>
                    <div className='a-g-global-lh-0'>
                        <Checkbox id='rememberMe'
                            externalClass='a-g-global-small-checkbox rounded-sm'
                            value={isRememberMe}
                            checkboxClicked={event => setRememberMe(event.target.checked)}>
                            {REMEMBER_ME}
                        </Checkbox>
                    </div>
                    <div>
                        <AppLink id='forgot-password-link'
                            externalClass='a-font-14'
                            target={APP_ROUTE_PATH.FORGOT_PASSWORD}>
                            {FORGOT_PASSWORD}
                        </AppLink>
                    </div>
                </div>
                <div className='col-6 p-0 text-right'>
                    <Button id='loginBtn'
                        externalClass='rounded-0 h-100 w-100 py-2 font-weight-normal a-btn-lg'
                        type='submit'>{BUTTON.LOGIN}</Button>
                </div>
            </div>
        </form>
    );
};

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: formData => dispatch(action.auth(formData))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
