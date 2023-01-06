import { useState } from 'react';
import './index.css';

const AboutProject = () => {
    return (
        <div className='container mt-5 about-project'>
            <div className='about_project__main py-5'>
                <h4 className='about-title-active'>About Project</h4>
                <div>
                    <p className='mt-5 project-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
            </div>
        </div>
    )
}

export default AboutProject;