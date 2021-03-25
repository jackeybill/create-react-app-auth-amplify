import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

// todo: need to find alternative
declare var $;

const DropDown = props => {
    const dropDownEl = useRef(null);

    useEffect(() => {
        $(dropDownEl.current).sumoSelect();
    }, []);

    return (
        <React.Fragment>
            <label className='a-form-label a-g-field-label a-text-grey font-weight-medium'
                htmlFor={props.id}
                id={`${props.id}label`}>
                {props.name}
            </label>
            <select
                className='a-bg-light a-select form-control a-g-select'
                ref={dropDownEl}
                id={props.id}
                aria-labelledby={`${props.id}label`}
                value={props.value}
                disabled={props.disabled}
                onClick={props.dropdownChanged}
                onChange={props.dropdownChanged}>
                {
                    props.options.map((option, index) => {
                        return (
                            <option
                                key={index}
                                value={option.value}>
                                {option.name}
                            </option>
                        )
                    })
                }
            </select>
        </React.Fragment>
    );
};

DropDown.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    value: PropTypes.string,
    dropdownChanged: PropTypes.func,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired
        })
    ).isRequired
};

DropDown.defaultProps = {
    options: []
};


export default DropDown;