import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const Checkbox = props => {
    const checkboxEl = useRef(null);

    return (
        <React.Fragment>
            <label className='a-checkbox' id={props.id}>
                <input ref={checkboxEl}
                    aria-label={props.id}
                    type='checkbox'
                    checked={props.value}
                    onChange={props.checkboxClicked} />
                <span className={`a-checkbox-mark ${props.externalClass}`}>
                    <span className='appkiticon icon-check-mark-fill'></span>
                </span>
                <span className='a-checkbox-text filters-item-name text-truncate'>
                    {props.children}</span>
            </label>
        </React.Fragment>
    );
};

Checkbox.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.bool,
    externalClass: PropTypes.string,
    checkboxClicked: PropTypes.func
};

export default Checkbox;