import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


const NavBar = props => {

    return (
        <div className='a-g-responsive-nav h-100'>
            <div className='a-tab-header h-100 d-flex align-items-center'>

                <div className='h-100 w-100'>
                    <ul className='h-100 row justify-content-center'>
                        {props.menu.map(menuItem => {
                            return (
                                <li className='col-auto'
                                key={menuItem.id}>
                                    <NavLink id={menuItem.id}
                                        className='a-link-no-interaction a-text-grey tab-item a-px-10'
                                        activeClassName='a-text-black active'
                                        to={menuItem.target}>
                                        {menuItem.name
                                        }</NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

NavBar.propTypes = {
    menu: PropTypes.array.isRequired
};

export default NavBar;