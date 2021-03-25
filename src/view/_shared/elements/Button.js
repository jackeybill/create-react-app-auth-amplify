import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const Button = props => {
    let categoryClass = '';
    switch (props.category) {
        case 'warning':
            categoryClass = 'a-btn-negative';
            break;
        case 'secondary':
            categoryClass = 'a-btn-gray';
            break;
        case 'spinner':
            categoryClass = 'a-no-interaction';
            break;
        default:
            categoryClass = '';
            break;
    };

    const buttonEl = useRef(null);

    return(
        <button className={`a-btn a-btn-${props.domain} ${categoryClass} ${props.externalClass}`}
        ref={buttonEl}
        id={props.id}
        type={props.type}
        disabled={props.disabled}
        aria-label={props.id}
        onClick={props.buttonClicked}>{props.children}</button>
    );
};

Button.propTypes = {
    id: PropTypes.string.isRequired,
    domain: PropTypes.oneOf(['primary', 'secondary', 'transparent']),
    category: PropTypes.oneOf(['primary', 'warning', 'secondary', 'spinner']),
    disabled: PropTypes.bool,
    externalClass: PropTypes.string,
    buttonClicked: PropTypes.func
};

Button.defaultProps = {
    domain: 'primary',
    category: 'primary',
    type: 'button'
};

export default Button;