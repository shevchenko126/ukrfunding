import './index.css';

const Footer = () => {
    return (
        <footer>
            <div className="contaniner-fluid footer">
                <div className="row gx-5 pt-5 mx-0">
                    <div className="col-lg-4 col-md-12 footer__first-col">
                        <div style={{ marginLeft: '15%' }} className="mt-4">
                            <img src="./image/footer_logo.svg" />
                        </div>
                        <div className="footer__first-col__text text-white mt-4">Akcel is a Crowdfunding & Charity Website by Peterdraw lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</div>
                        <div className="row mt-4 text-center">
                            <div className="col-2" style={{ marginLeft: '12%' }}>
                                <img src="./image/footer_facebook.svg" className="footer__first-col__logo" />
                            </div>
                            <div className="col-2">
                                <img src="./image/footer_twitter.svg" className="footer__first-col__logo twitter" />
                            </div>
                            <div className="col-2">
                                <img src="./image/footer_youtube.svg" className="footer__first-col__logo" />
                            </div>
                            <div className="col-2">
                                <img src="./image/footer_in.svg" className="footer__first-col__logo in" />
                            </div>
                            <div className="col-2">
                                <img src="./image/footer_instagram.svg" className="footer__first-col__logo" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1 col-md-4 text-white text-center">
                        <div className="footer__title mt-4 pb-3">Akcel</div>
                        <div className="footer__item">Why Akcel</div>
                        <div className="footer__item">Enterprise</div>
                        <div className="footer__item">Customer Story</div>
                        <div className="footer__item">Security</div>
                        <div className="footer__item">Pricing</div>
                    </div>
                    <div className="col-lg-2 col-md-4 text-white text-center">
                        <div className="footer__title mt-4 pb-3">Resources</div>
                        <div className="footer__item">Download</div>
                        <div className="footer__item">Help Center</div>
                        <div className="footer__item">Events</div>
                        <div className="footer__item">Guides</div>
                        <div className="footer__item">Partner</div>
                        <div className="footer__item">Directories</div>
                    </div>
                    <div className="col-lg-1 col-md-4 text-white text-center">
                        <div className="footer__title mt-4 pb-3">Company</div>
                        <div className="footer__item">About us</div>
                        <div className="footer__item">Contact us</div>
                        <div className="footer__item">Products</div>
                        <div className="footer__item">Login</div>
                        <div className="footer__item">Sign Up</div>
                        <div className="footer__item">FAQ</div>
                    </div>
                    <div className="col-lg-4 col-md-12 footer__first-col fifth_col text-white">
                        <div>
                            <div className="footer__title mt-4 pb-4">Get in Touch with Us</div>
                            <div className="d-flex justify-content-center">
                                <img src="./image/footer_location.svg" className="mx-2" style={{ marginTop: '-20px' }} />
                                <div className="footer__location">832  Thompson Drive, San Fransisco CA 94107, United States</div>
                            </div>
                            <div className="d-flex justify-content-center mt-4">
                                <img src="./image/footer_phone.svg" className="mx-2" />
                                <div className="footer__location">394-091-3312</div>
                            </div>
                            <div className="d-flex justify-content-center" style={{ marginTop: '40px' }}>
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