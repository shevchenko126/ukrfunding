import './index.css';

const WeHelpSurface = () => {
    return (
        <div className="container we_help_surface">
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="d-flex align-items-center title">
                        <img src="/image/page1_we_help_surface_panel.svg" alt="" />
                        <h4 className="text-success mx-3">Crowdfunding</h4>
                    </div>
                    <div className='title-tile'>
                        <h1 className="mt-3">We Help Surface</h1>
                        <h2 className="mt-1">Innovations In Technology</h2>
                        <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                    </div>
                    <div className="d-flex row pb-5">
                        <div className='col-lg-4 col-md-12 btn-center mt-2'>
                            <button className="mt-2 button-bg-pink-text-white">
                                <div className="d-flex">
                                    <div style={{ paddingRight: '15px' }}>Learn More</div>
                                    <img src="/image/page1_we_help_surface_arrow.svg" alt="" />
                                </div>
                            </button>
                        </div>
                        <div className='col-lg-8 col-md-12 d-flex btn-center'>
                            <button className="mt-2 button-bg-white-text-gray">Donate</button>
                        </div>
                    </div>
                    <div className='partners'>
                        <h5 className="mt-5">Our Partners</h5>
                        <div className="mt-1 text-center row logotypes">
                            <div className="col">
                                <img src="/image/page1_we_help_surface_highlow.svg" className="mt-3" alt="" />
                            </div>
                            <div className="col">
                                <img src="/image/page1_we_help_surface_imagine.svg" class="mt-3" alt="" />
                            </div>
                            <div className="col">
                                <img src="/image/page1_we_help_surface_glowup.svg" className="mt-3" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 d-flex justify-content-center">
                    <img src="./image/page1_we_help_surface_panels.svg" className="img-fluid mt-5 help-panel" alt="" />
                </div>
            </div>
        </div>
    )
}

export default WeHelpSurface;