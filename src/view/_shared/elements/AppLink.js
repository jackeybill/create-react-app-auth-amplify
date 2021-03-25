import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from "react-router-dom";

const AppLink = props => {

    return (
        <Link id={props.id}
            to={props.target}
            className={`a-link ${props.externalClass}`}>
            {props.children}
        </Link>
    );
};

AppLink.propTypes = {
    id: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired,
    externalClass: PropTypes.string,
    checkboxClicked: PropTypes.func
};

export default AppLink;