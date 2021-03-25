import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../_shared/templates/Header';
import Footer from '../templates/Footer';


const Layout = props => {
    let layoutClass = '';
    let mainLayoutClass = props.externalMainLayoutClass;
    if (props.coloredBody) {
        layoutClass = 'a-bg-grey-lighter';
    };

    if (!props.skipHeader) {
        mainLayoutClass = `${mainLayoutClass} a-g-layout-secondary`;
    } else {
        mainLayoutClass = `${mainLayoutClass} a-g-layout-primary`;
    };

    return (
        <div className={`${layoutClass} container-fluid px-0`}>
            {props.skipHeader ? null : <Header {...props} />}
            <main className={mainLayoutClass}>
                {props.children}
            </main>
            {props.skipFooter ? null : <Footer />}
        </div>
    );
};

Layout.propTypes = {
    skipHeader: PropTypes.bool,
    skipFooter: PropTypes.bool,
    coloredBody: PropTypes.bool,
    externalMainLayoutClass: PropTypes.string
};

Layout.defaultProps = {
    skipHeader: false,
    skipFooter: false,
    coloredBody: false,
    externalMainLayoutClass: ''
};

export default Layout;