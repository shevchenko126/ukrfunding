import './index.css';

const Header = () => {
    return (
        <section>
            <div className='container'>
                <div className='row d-flex align-items-center'>
                    <div className='col-lg-7 col-md-12 px-3'>
                        <div className='row align-items-center'>
                            <div className='col-lg-6 col-md-12 mt-4'>
                                <h6>Welcome to Akcel, Crowdfunding & Charity Agency</h6>
                            </div>
                            <div className='col-lg-6 col-md-12 mt-3'>
                                <a href="/register">
                                    <button className='button-bg-green-text-white d-flex align-items-center justify-content-center'>
                                        <img alt="sign up" src="/image/header_top_singAp.svg" />
                                        <div className='mx-2'>Sign Up Now</div>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-5 col-md-12'>
                        <div className='row'>
                            <div className='col-lg-6 col-md-12 mt-4 d-flex header-top-email-phone'>
                                <img src="/image/header_top_phone.svg" alt="phone" />
                                <h6 className='px-3 mb-0'>394-091-3312</h6>
                            </div>
                            <div className='col-lg-6 col-md-12 mt-4 d-flex header-top-email-phone'>
                                <img src="/image/header_top_email.svg" alt="email" />
                                <h6 className='mb-0' style={{ marginLeft: '15px' }}>support@akcel.com</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr style={{ width: '100%', color: 'rgba(0, 0, 0, 0.5)' }} className='mt-4' />
            <div className='container mt-4 pb-4'>
                <div className='row d-flex'>
                    <a href="/" className='col-lg-3 col-md-12'>
                        <img src="/image/logo_Akcel.png" alt="logo" />
                    </a>
                    <div className='col-lg-6'>
                        <div className='row text-center d-flex justify-content-center align-items-center'>
                            <h5 className='col mt-4'>
                                <a href='/' className='header-bottom__ref'>Home</a>
                            </h5>
                            <h5 className='col mt-4'>
                                <a href='/about-us' className='header-bottom__ref'>About</a>
                            </h5>
                            <h5 className='col mt-4'>
                                <div className='d-flex justify-content-center'>
                                    <a href='/' className='header-bottom__ref'>Projects</a>
                                    <img className='mx-2' alt="more" src='/image/header_down_arrow.svg' />
                                </div>
                            </h5>
                            <h5 className='col mt-4'>
                                <a href='/latest-news' className='header-bottom__ref'>News</a>
                            </h5>
                            <h5 className='col mt-4'>
                                <a href='/conact-us' className='header-bottom__ref'>Contact Us</a>
                            </h5>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-12 mt-2 d-flex header-bottom__button'>
                        <button className='button-bg-white-text-pink'>
                            <img alt="user" src='/image/header_bottom_user.svg' />
                            <span className='mx-3'>My Account</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header;