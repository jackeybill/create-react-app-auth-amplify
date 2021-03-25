import React from 'react';
import { APP_FOOTER } from '../../../config/app';

const Footer = () => {

    return (
        <div className="footer-wrapper flex-shrink-0 text-left a-bg-content mx-4">
            <div className="a-footer">
                {APP_FOOTER}
            </div>
        </div>
    );
};


export default Footer;