import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { API_KEY } from '../../../config/api';
import { APP_TITLE } from '../../../config/app';
import Logo from '../../_shared/elements/Logo';
import Layout from '../../_shared/hoc/Layout';
import Footer from '../../_shared/templates/Footer';
import LoginForm from '../templates/LoginForm';


const LoginPage = props => {

    let authRedirect = null;
    if (props.isAuthenticated) {
        authRedirect = <Redirect to={props.redirectPath} />
    };

    return (
        <Layout skipHeader skipFooter>
            {authRedirect}
            <div className='d-flex'>
                <div className='a-g-login-container'>
                    <div className='row justify-content-center'>
                        <div className='col-10 a-g-login-wrapper'>
                            <div className='a-m-20'>
                                <Logo />
                                <h6 className='a-h6 a-mt-50 mb-0 ml-2 a-text-grey font-weight-medium'>Welcome to</h6>
                                <h1 className='a-h1 a-g-global-ls-1p2-imp'>{APP_TITLE}</h1>
                            </div>
                            <div className='a-mr-30 a-pr-50 a-mt-40 a-g-global-w-29 font-weight-medium'>
                                <LoginForm {...props} />
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
                <div className='a-g-bg-banner'>
                </div>
            </div>
        </Layout>
    );
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.user && state.auth.user[API_KEY.AUTH_TOKEN] !== null,
        redirectPath: state.shared.redirectPath
    };
};

export default connect(mapStateToProps)(LoginPage);