import './index.css';

const WeHelpSurface = () => {
    return (
        <div className="container mt-5 we_help_surface">
        <div className="row">
            <div className="col-lg-6 col-md-12">
                <div className="d-flex">
                    <img src="./images/page1_we_help_surface_panel.svg" />
                    <div className="text-success mx-3 we_help_surface__title">Crowdfunding</div>
                </div>
                <div className="mt-3 we_help_surface__theme">We Help Surface</div>
                <div className="mt-1 we_help_surface__theme-text">Innovations In Technology</div>
                <div className="mt-4 we_help_surface__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</div>
                <div className="d-flex pb-5 we_help_surface__buttons">
                    <button className="mt-5 text-white we_help_surface__buttons__learn_more">
                        <div className="d-flex">
                            <div className="px-3">Learn More</div>
                            <img src="./images/page1_we_help_surface_arrow.svg" className="mx-4" />
                        </div>
                    </button>
                    <button className="mt-5 mx-5 we_help_surface__buttons__donate">Donate</button>
                </div>
                <div className="mt-5 we_help_surface__our_partners">Our Partners</div>
                <div className="mt-1 text-center row we_help_surface__logotypes">
                    <div className="col">
                        <img src="./images/page1_we_help_surface_highlow.svg" className="mt-3" />
                    </div>
                    <div className="col">
                        <img src="./images/page1_we_help_surface_imagine.svg" class="mt-3" />
                    </div>
                    <div className="col">
                        <img src="./images/page1_we_help_surface_glowup.svg" className="mt-3" />
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 d-flex justify-content-center">
                <img src="./images/page1_we_help_surface_panels.svg" className="img-fluid mt-5" />
            </div>
        </div>
        </div>
    )
}

export default weHelpSurface;