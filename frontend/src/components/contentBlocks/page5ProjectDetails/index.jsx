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
                            <div className="col-lg-9 col-sm-12 text-center">
                                <div className="d-flex">
                                    <img alt="#" src="/image/page_5_icon.svg" />
                                    <div style={{ marginLeft: ' 20px' }}>
                                        <div className="d-flex">
                                            <div className="h5">Hendric Anderson</div>
                                            <div style={{ marginLeft: ' 15px' }}>
                                                <img alt="#" src="/image/page_5_star.svg" />
                                                <img alt="#" src="/image/page_5_star.svg" className='px-1' />
                                                <img alt="#" src="/image/page_5_star.svg" />
                                            </div>
                                        </div>
                                        <div className="d-flex mt-2">
                                            <div className="text-success author-campaign">12 Campaign</div>
                                            <img alt="#" src="/image/page_5_dot.svg" style={{ margin: '-3px 10px 0 10px' }} />
                                            <div className='author-city' style={{ marginTop: '-1px' }}>New York, London</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-12 mt-3">
                                <img alt="#" src="/image/page_5_heart.svg" />
                                <img alt="#" src="/image/page_5_share.svg" className='mx-5' />
                                <img alt="#" src="/image/page_5_flag.svg" />
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
                        <hr className="mt-5" />
                        <div className="mt-5 h5">Project Notes:</div>
                        <div className="project-notes">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;