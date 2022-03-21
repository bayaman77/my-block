import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Posts from '../Posts/Posts';
import Tags from '../Tags/Tags';

const Sidebar = () => {
    return (
        <div className='w3-col l4'>
            <AboutMe/>
            <Posts/>
            <Tags/>
        </div>
    );
};

export default Sidebar;