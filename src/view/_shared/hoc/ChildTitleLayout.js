import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { DATE_FORMAT } from '../../../config/app';
import { getLocalDate } from '../../../utils/app';


const ChildTitleLayout = props => {

    return (
        <div className='row a-pt-20 a-pb-10'>
                <div className='col-3'>
                    <h3 className='a-h3 my-auto font-weight-bold'>{props.title}</h3>
                </div>
                <div className='col-7'>
                   {props.children}
                </div>
                <div className='col-2 text-right'>
                    <strong>DATE</strong> : {moment(getLocalDate()).format(DATE_FORMAT.HEADING)}
                </div>  
            </div>
    );
};

ChildTitleLayout.propTypes = {
    title: PropTypes.string
};

export default ChildTitleLayout;