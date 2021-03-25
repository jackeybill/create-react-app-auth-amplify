import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const Input = props => {
    const inputEl = useRef(null);

    return (
        <React.Fragment>
            <label className='a-form-label a-g-field-label a-text-grey font-weight-medium'
                htmlFor={props.id}
                id={`${props.id}label`}>
                {props.name}
            </label>
            <input className='a-text-input'
                ref={inputEl}
                id={props.id}
                aria-labelledby={`${props.id}label`}
                type={props.type}
                value={props.value}
                disabled={props.disabled}
                onChange={props.inputChanged} />
        </React.Fragment>
    );
};

Input.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    value: PropTypes.string,
    inputChanged: PropTypes.func,
};

Input.defaultProps = {
    type: 'text'
};

export default Input;