import React from 'react';
import { notifyReset } from '../../../store/_shared/_shared-action';
import { connect } from 'react-redux';

const Notification = props => {
    let notifyClass = '';

    if (props.identifier) {
        notifyClass = 'show a-g-notify-open';
    };
    
    return (
        <div className={`modal a-modal fade ${notifyClass} a-g-notify-modal`} id='exampleModal' role='dialog'>
            <div className='modal-dialog' role='document'>
                <div className='modal-content'>
                    <div className='a-modal-header'>
                        <div className='flex-fill d-flex align-items-center'>
                            <div className={`a-badge a-badge-${props.identifier} a-mr-10`}>
                                {props.identifier && props.identifier.toUpperCase()}
                            </div>
                            <span className='a-color-dark a-font-12'>{props.title}</span>
                        </div>
                        <button aria-label='Close' type='button' className='icon-wrapper' data-dismiss='modal'
                            onClick={props.resetNotification}>
                            <span className='appkiticon icon-close-fill a-close-btn'></span>
                        </button>
                    </div>
                    <div className='a-modal-body pt-0'>
                        <div>{props.message}</div>
                    </div>
                    <div className='a-modal-footer justify-content-end'>
                        <button aria-label='Close' className='a-btn a-btn-transparent' data-dismiss='modal' onClick={props.resetNotification}>OK</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        identifier: state.shared.notifyType,
        title: state.shared.notifyTitle,
        message: state.shared.notifyMsg
    };
};

const mapDispatchToProps = dispatch => {
    return {
        resetNotification: () => dispatch(notifyReset())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);