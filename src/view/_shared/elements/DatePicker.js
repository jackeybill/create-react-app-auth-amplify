import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

declare var $;

const DatePicker = props => {
    const datePickerEl = useRef(null);
    useEffect(()=>{
        $(datePickerEl.current).datepicker({
            type: 'single',
            range: false,
            navTitles: {
                days: 'MM yyyy'
            },
            firstDay: 1,
            onselect: (formattedDate, date, inst)=> handleChange(formattedDate, date, inst)
        });
    });

    const handleChange = (formattedDate, date, inst) => {
        console.log('date', formattedDate, date, inst)
    };

    return (
        <React.Fragment>
            <label className='a-form-label a-g-field-label a-text-grey font-weight-medium'
                htmlFor={props.id}
                id={`${props.id}label`}>
                {props.name}
            </label>
            <div className='a-input-with-icon a-datepicker-input a-rt a-g-date-picker w-100'>
                <input className='a-text-input d-inline-block single-demo' 
                data-classes='a-datepicker a-single air-picker' readOnly={true} 
                ref={datePickerEl}/>
                <div className='a-icon' data-toggle='datepicker'>
                    <span className='appkiticon icon-calendar-outline d-inline-flex'></span>
                </div>
            </div>
        </React.Fragment>
    );
};

// DatePicker.propTypes = {
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     type: PropTypes.string.isRequired,
//     disabled: PropTypes.bool,
//     value: PropTypes.string,
//     inputChanged: PropTypes.func,
// }

// DatePicker.defaultProps = {
//     type: 'text'
// }

export default DatePicker;