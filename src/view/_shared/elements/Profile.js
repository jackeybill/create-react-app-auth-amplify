import React from 'react';
import { connect } from 'react-redux';
import { capitalize } from '../../../utils/app';
import Button from './Button';
import Logout from './Logout';


const Profile = props => {

    return (
        <div className='a-logout d-flex'>
            <div className='flex-column'>
                {props.user ?
                    <div className='d-flex a-px-10'>
                        <div className='d-flex flex-column my-auto a-px-10'>
                            <span className='a-font-14 a-text-grey'>
                                Hi {capitalize(props.user.name)}!
                                </span>
                            <span className='a-font-12 a-text-9e9 text-right text-capitalize'>
                                {props.user.role}
                            </span>
                        </div>
                        <div className='flex-column my-auto a-px-10'>
                            <Button id='profile-button'
                                externalClass='user-name a-bg-primary size-24'>
                                {props.user.shortName}
                            </Button>
                        </div>
                    </div> : null}
            </div>
            <div className='flex-column my-auto'>
                <Logout/>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        user: state.auth.user
    };
};


export default connect(mapStateToProps)(Profile);