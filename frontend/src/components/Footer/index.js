import './index.css';

const Footer = () => {
    return (
        <footer>
            <div className="contaniner-fluid footer">
                <div className="row gx-5 pt-3 mx-0">
                    <div className="col-lg-4 col-md-12 footer__first-col">
                        <div className="mt-5 d-flex justify-content-center">
                            <img src="./image/footer_logo.svg" className='footer__first-col-logo' />
                        </div>
                        <div className="footer__first-col__text d-flex justify-content-center text-white mt-4">Akcel is a Crowdfunding & Charity Website by Peterdraw lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</div>
                        <div className="row mt-4 d-flex justify-content-center">
                            <div className="col-2">
                                <a href='#'>
                                    <img src="./image/footer_facebook.svg" className="footer__first-col__logo" />
                                </a>
                            </div>
                            <div className="col-2">
                                <a href='#'>
                                    <img src="./image/footer_twitter.svg" className="footer__first-col__logo twitter" />
                                </a>
                            </div>
                            <div className="col-2">
                                <a href='#'>
                                    <img src="./image/footer_youtube.svg" className="footer__first-col__logo" />
                                </a>
                            </div>
                            <div className="col-2">
                                <a href='#'>
                                    <img src="./image/footer_in.svg" className="footer__first-col__logo in" />
                                </a>
                            </div>
                            <div className="col-2">
                                <a href='#'>
                                    <img src="./image/footer_instagram.svg" className="footer__first-col__logo" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1 col-md-4 text-white text-center">
                        <div className="footer__title mt-5 pb-3">Akcel</div>
                        <a href=''>
                            <div className='footer__item'>Why Akcel</div>
                        </a>
                        <a href=''>
                            <div className='footer__item'>Enterprise</div>
                        </a>
                        <a href=''>
                            <div className='footer__item'>Customer Story</div>
                        </a>
                        <a href=''>
                            <div className='footer__item'>Security</div>
                        </a>
                        <a href=''>
                            <div className='footer__item'>Pricing</div>
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-4 text-white text-center">
                        <div className="footer__title mt-5 pb-3">Resources</div>
                        <a href=''>
                            <div className="footer__item">Download</div>
                        </a>
                        <a href=''>
                            <div className="footer__item">Help Center</div>
                        </a>
                        <a href=''>
                            <div className="footer__item">Events</div>
                        </a>
                        <a href=''>
                            <div className="footer__item">Guides</div>
                        </a>
                        <a href=''>
                            <div className="footer__item">Partner</div>
                        </a>
                        <a href=''>
                            <div className="footer__item">Directories</div>
                        </a>
                    </div>
                    <div className="col-lg-1 col-md-4 text-white text-center">
                        <div className="footer__title mt-5 pb-3">Company</div>
                        <a href=''>
                            <div className="footer__item">About us</div>
                        </a>
                        <a href=''>
                            <div className="footer__item">Contact us</div>
                        </a>
                        <a href=''>
                            <div className="footer__item">Products</div>
                        </a>
                        <a href=''>
                            <div className="footer__item">Login</div>
                        </a>
                        <a href=''>
                            <div className="footer__item">Sign Up</div>
                        </a>
                        <a href=''>
                            <div className="footer__item">FAQ</div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-12 d-flex justify-content-center footer__first-col fifth_col text-white">
                        <div>
                            <div className="footer__title mt-5 pb-4">Get in Touch with Us</div>
                            <div className="d-flex fifth_col__location">
                                <img src="./image/footer_location.svg" className="mx-2" style={{ marginTop: '-20px' }} />
                                <div className="footer__location">832  Thompson Drive, San Fransisco CA 94107, United States</div>
                            </div>
                            <div className="d-flex fifth_col__phone mt-4">
                                <img src="./image/footer_phone.svg" className="mx-2" />
                                <div className="footer__location">394-091-3312</div>
                            </div>
                            <div className="d-flex fifth_col__email" style={{ marginTop: '40px' }}>
                                <img src="./image/footer_email.svg" className="mx-2" />
                                <div className="footer__location">support@akcel.com</div>
                            </div>
                        </div>
                    </div>
                    <hr style={{ border: '2px solid #3D3F4E', marginTop: '150px' }} />
                    <div className="text-white text-center pb-4 pt-4 h6">Akcel Crowdfunding & Charity Website  -   © 2021 by Peterdraw</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;