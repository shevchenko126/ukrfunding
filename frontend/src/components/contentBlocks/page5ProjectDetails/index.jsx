import './index.css';

const Details = () => {
    return (
        <div className=''>
            <div className="text-center project-details container-fluid py-4">
                <h2 className="text-white">Project Details</h2>
                <div className="text-white mt-3">
                    <b>Home / Projects / </b>
                    <span>Samcung Okulus Rivt PC - Powered VR Gaming Headset</span>
                </div>
            </div>
            <div className="mt-5 project-details-main container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="mt-3">
                            <iframe title='video' className="main-video" src="https://www.youtube.com/embed/nybtOIxlku8" style={{ borderRadius: '14px' }}></iframe>

                            {/* <img src="/image/page_1_team_member_profile.svg" className="main-video" /> */}
                        </div>
                        <div className="row text-center mt-4">
                            <div className="col">
                                <iframe title='video' width="176" height="150" src="https://www.youtube.com/embed/nybtOIxlku8" style={{ borderRadius: '14px' }}></iframe>
                            </div>
                            <div className="col">
                                <iframe title='video' width="176" height="150" src="https://www.youtube.com/embed/nybtOIxlku8" style={{ borderRadius: '14px' }}></iframe>
                            </div>
                            <div className="col">
                                <iframe title='video' width="176" height="150" src="https://www.youtube.com/embed/nybtOIxlku8" style={{ borderRadius: '14px' }}></iframe>
                            </div>
                            <div className="col">
                                <iframe title='video' width="176" height="150" src="https://www.youtube.com/embed/nybtOIxlku8" style={{ borderRadius: '14px' }}></iframe>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 mt-3">
                        <div className="row">
                            <div className="col-lg-9 col-sm-12">
                                <div className="d-flex">
                                    <img alt="#" src="/image/page_5_icon.svg" />
                                    <div style={{ marginLeft: ' 20px' }}>
                                        <div className="h5">Hendric Anderson</div>
                                        <p className='author-city'>New York, London</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-12 mt-3 d-flex justify-content-end">
                                <img alt="#" src="/image/page_5_heart.svg" className='share-icon' />
                                <img alt="#" src="/image/page_5_share.svg" className='share-icon' style={{ marginLeft: '45px' }} />
                            </div>
                        </div>
                        <h3 className="mt-4">Samcung Okulus Rivt PC - Powered VR  Gaming Headset</h3>
                        <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                        <div className="mt-5 progress details">
                            <div className="progress-bar" style={{ width: '65%' }}></div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-lg-4 mt-3 col-md-12">
                                <div className="d-flex">
                                    <img alt="#" src="/image/page_5_coins.svg" style={{ marginTop: '-18px' }} />
                                    <div style={{ marginLeft: '25px' }}>
                                        <div className="project-number">$ 65,235</div>
                                        <div>Total Raised</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mt-3 col-md-12">
                                <div className="d-flex">
                                    <img alt="#" src="/image/page_5_calendar.svg" style={{ marginTop: '-18px' }} />
                                    <div style={{ marginLeft: '25px' }} >
                                        <div className="project-number">235</div>
                                        <div>Days to go</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mt-3 col-md-12">
                                <button className="text-white h5 project-details-btn">Fund This Project</button>
                            </div>
                        </div>
                        <hr className="mt-3" />
                        <h4 className='about-title-active text-center pt-2'>About Project</h4>
                        <div className='project-notes mt-4'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;