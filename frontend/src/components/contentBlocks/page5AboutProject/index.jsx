import { useState } from 'react';
import './index.css';

const AboutProject = () => {

    const [activeTab, setActiveTab] = useState('aboutProject')

    return (
        <div className='container mt-5 about-project'>
            <div className='about_project__main'>
                <div className='row text-center'>
                    <div className='col-lg-3 col-md-6 col-sm-12 mt-5'>
                        <h4 onClick={() => setActiveTab('aboutProject')} className={`${activeTab === 'aboutProject' ? 'about-title-active' : 'about-title-unactive'}`}>About Project</h4>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 mt-5'>
                        <h4 onClick={() => setActiveTab('updates')} className={`${activeTab === 'updates' ? 'about-title-active' : 'about-title-unactive'}`}>Updates</h4>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 mt-5'>
                        <h4 onClick={() => setActiveTab('backerList')} className={`${activeTab === 'backerList' ? 'about-title-active' : 'about-title-unactive'}`}>Backer List</h4>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 mt-5'>
                        <h4 onClick={() => setActiveTab('reviews')} className={`${activeTab === 'reviews' ? 'about-title-active' : 'about-title-unactive'}`}>Reviews (245)</h4>
                    </div>
                </div>
                <div>
                    <p className='mt-5 project-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    <p className='mt-5 project-description'>Eos cumque recusandae recusandae harum dolorem optio. Non asperiores ex qui mollitia et consectetur autem laborum ex. Enim ea deleniti sed omnis. Repudiandae nobis vitae in. Iusto ducimus sed non facilis occaecati quibusdam. Tenetur iure quo nihil minima aut qui. Harum voluptatem ullam deserunt voluptatem cumque rerum enim fugit nulla. Assumenda dolore ex inventore ut.</p>
                    <p className='mt-5 project-description'>Consequatur et dignissimos a pariatur et accusantium aliquid. Dolor fugiat corrupti soluta praesentium expedita ducimus labore. Unde minima nulla fuga quos minus temporibus animi qui expedita. Sed quibusdam et. Rerum tempora sit qui ut fugiat.</p>
                </div >
                <div className='row mt-5 mb-4'>
                    <div className='col-lg-6 col-md-12 mt-1'>
                        <div className='d-flex mt-4'>
                            <img src='/image/page5_circle.svg' />
                            <p className='mx-2 project-description'>Unde rerum a. Et voluptatem harum id.</p>
                        </div>
                        <div className='d-flex'>
                            <img src='/image/page5_circle.svg' />
                            <p className='mx-2 my-3 project-description'>Unde rerum a. Et voluptatem harum id.</p>
                        </div>
                        <div className='d-flex'>
                            <img src='/image/page5_circle.svg' />
                            <p className='mx-2 project-description'>Unde rerum a. Et voluptatem harum id.</p>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-12 mt-1'>
                        <div className='d-flex mt-4'>
                            <img src='/image/page5_circle.svg' />
                            <p className='mx-2 project-description'>Unde rerum a. Et voluptatem harum id.</p>
                        </div>
                        <div className='d-flex'>
                            <img src='/image/page5_circle.svg' />
                            <p className='mx-2 my-3 project-description'>Unde rerum a. Et voluptatem harum id.</p>
                        </div>
                        <div className='d-flex'>
                            <img src='/image/page5_circle.svg' />
                            <p className='mx-2 project-description'>Unde rerum a. Et voluptatem harum id.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src='/image/page5_profile.svg' className='mt-5' style={{ width: '100%' }} />
                </div>
                <p className='mt-5 pb-5 project-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumm tempor.</p>
            </div >
        </div >
    )
}

export default AboutProject;