import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../../store/auth';
import Button from './Button';


const Logout = props => {
    return (
        <Button id='logout-button'
            domain='transparent'
            externalClass='a-btn-lg px-0 a-bg-white a-text-primary'
            buttonClicked={props.logout}>
            Logout
        </Button>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    };
};


export default connect(null,mapDispatchToProps)(Logout);