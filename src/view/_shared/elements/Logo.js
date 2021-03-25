import React from 'react';
import logo from './../../../assets/pwc-logo.svg';
import PropTypes from 'prop-types';

const Logo = props => {

    return (
        props.hasAppkitLogo ? 
            <div className="a-pwc-logo a-md"></div> : 
            <img src={logo} alt='pwc-logo' className='a-g-logo a-px-5' /> 
    );
};

Logo.propTypes = {
    hasAppkitLogo: PropTypes.bool
};

Logo.defaultProps = {
    hasAppkitLogo: false
};

export default Logo;