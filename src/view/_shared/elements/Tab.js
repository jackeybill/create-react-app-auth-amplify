import React, { useState } from 'react';
import PropTypes from 'prop-types';

// TODO: setup
const Tab = props => {
    const [activeTabId, setActiveTabId] = useState(props.defaultActiveTabId);

    /**
     * tabClickHandler
     * @param {string} id 
     */
    const tabClickHandler = id => {
        setActiveTabId(id);
        props.tabClicked(id);
    };

    return (
        props.tabs ? <div 
        className='a-tab-container a-overflow-visible m-auto a-g-secondary-custom-tab'>
            <ul className='a-tab a-tab-md'>
                {
                    props.tabs.map(item => {
                        return (
                            <li id={item.id} key={item.id}
                             className={`a-tab-item ${item.id === activeTabId ? 'active': ''}`}
                             onClick={()=> tabClickHandler(item.id)}
                             >{item.name}</li>
                        )
                    })
                }
            </ul>
        </div> : null
    );
};

Tab.propTypes = {
    tabs: PropTypes.array.isRequired,
    tabClicked: PropTypes.func.isRequired,
    defaultActiveTabId: PropTypes.string
};

export default Tab;