import React, { useEffect } from 'react';
import { CASE_INTAKE_TAB } from '../../../config/app';


const IntakeSummary = (props) => {

    useEffect(() => {
        //props.history.push(APP_ROUTE_PATH.CASE_INTAKE);
    });

    return (
        <React.Fragment>
            <h5 className='a-py-20 a-h5 font-weight-bold'>{CASE_INTAKE_TAB[1].name}</h5>
        </React.Fragment>
    );
};

export default IntakeSummary;