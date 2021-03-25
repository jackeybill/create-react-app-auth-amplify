import React from 'react';
import { APP_NAV_MENU, APP_TITLE } from '../../../config/app';
import Logo from '../elements/Logo';
import NavBar from '../elements/NavBar';
import Profile from '../elements/Profile';


const Header = () => {

    return (
        <div className='a-header h-auto align-items-center a-px-50 flex-wrap flex-xl-nowrap row mx-0'>
            <div className='align-items-center col-xl-3 d-flex height-50 justify-content-between mr-2 mr-lg-0 order-0 px-0'>
                <Logo hasAppkitLogo />
                <span className='a-g-global-divider-large a-mx-20 divider'></span>
                <div className='a-font-18 a-nowrap font-weight-medium'>{APP_TITLE}</div>
                <span className='a-ml-20 d-none d-xl-inline-block divider'></span>
            </div>
            <div className='a-hfn-menu-container a-pl-50 align-items-center col-12 col-xl-6 d-flex height-50 order-2 order-xl-1 w-100'>
                <NavBar menu={APP_NAV_MENU} />
            </div>
            <div className='a-header-set align-items-center col-6 col-xl-3 d-flex height-50 justify-content-end order-1 order-xl-2'>
                <span className='divider a-mx-10 a-g-global-divider-large'></span>
                <Profile />
            </div>
        </div>
    );
};

export default Header;