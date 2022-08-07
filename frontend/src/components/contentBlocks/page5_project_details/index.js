import './index.css';

const Details = () => {
    return (
        <div>
            <div className="container-fluid text-center project_details">
                <div className="text-white pt-5 project_details__title">Project Details</div>
                <div className="text-white mt-3">
                    <span className="h6">Home / Projects /</span>
                    <span>Samcung Okulus Rivt PC - Powered VR Gaming Headset</span>
                </div>
            </div>
            <div className="container mt-5 project_details__main">
                <div className="row">
                    <div className="col-lg-6 project_details__main__left">
                        <div className="mt-3">
                            <iframe className="project_details__main__left__main_video" src="https://www.youtube.com/embed/nybtOIxlku8" style={{ borderRadius: '14px' }}></iframe>
                        </div>
                        <div className="row text-center mt-4">
                            <div className="col">
                                <iframe width="176" height="150" src="https://www.youtube.com/embed/nybtOIxlku8" style={{ borderRadius: '14px' }}></iframe>
                            </div>
                            <div className="col">
                                <iframe width="176" height="150" src="https://www.youtube.com/embed/nybtOIxlku8" style={{ borderRadius: '14px' }}></iframe>
                            </div>
                            <div className="col">
                                <iframe width="176" height="150" src="https://www.youtube.com/embed/nybtOIxlku8" style={{ borderRadius: '14px' }}></iframe>
                            </div>
                            <div className="col">
                                <iframe width="176" height="150" src="https://www.youtube.com/embed/nybtOIxlku8" style={{ borderRadius: '14px' }}></iframe>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 mt-3 project_details__main__right">
                        <div className="row">
                            <div className="col-lg-9 col-sm-12 text-center">
                                <div className="d-flex">
                                    <img src="../image/page_5_icon.svg" />
                                    <div style={{ marginLeft: ' 20px' }}>
                                        <div className="d-flex">
                                            <div className="h5">Hendric Anderson</div>
                                            <div style={{ marginLeft: ' 15px' }}>
                                                <img src="../image/page_5_star.svg" />
                                                <img src="../image/page_5_star.svg" className='px-1' />
                                                <img src="../image/page_5_star.svg" />
                                            </div>
                                        </div>
                                        <div className="d-flex mt-2">
                                            <div className="text-success h6">12 Campaign</div>
                                            <img src="../image/page_5_dot.svg" style={{ margin: '-3px 10px 0 10px' }} />
                                            <div style={{ marginTop: '-1px' }}>New York, London</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-12 mt-3">
                                <img src="../image/page_5_heart.svg" />
                                <img src="../image/page_5_share.svg" style={{ margin: '0 30px' }} />
                                <img src="../image/page_5_flag.svg" />
                            </div>
                        </div>
                        <div className="mt-4 project_details__main__right__main__title">Samcung Okulus Rivt PC - Powered VR  Gaming Headset</div>
                        <div className="mt-4 project_details__main__right__main__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</div>

                        <div className="mt-5 progress details">
                            <div className="progress-bar details" style={{ width: '65%' }}></div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-lg-4 mt-3 col-md-12">
                                <div className="d-flex">
                                    <img src="../image/page_5_coins.svg" style={{ marginTop: '-18px' }} />
                                    <div style={{ marginLeft: '25px' }}>
                                        <div className="project_details__main__right__numbers">$ 65,235</div>
                                        <div>Total Raised</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mt-3 col-md-12">
                                <div className="d-flex">
                                    <img src="../image/page_5_calendar.svg" style={{ marginTop: '-18px' }} />
                                    <div style={{ marginLeft: '25px' }} >
                                        <div className="project_details__main__right__numbers">235</div>
                                        <div>Days to go</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mt-3 col-md-12">
                                <button className="text-white h5 project_details__main__right__button">Fund This Project</button>
                            </div>
                        </div>
                        <hr className="mt-5 project_details__main__right___line" />
                        <div className="mt-5 h5">Project Notes:</div>
                        <div className="project_details__main__right__bottom">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;