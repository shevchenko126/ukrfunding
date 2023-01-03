import './index.css';
import background from './bg.svg';

const HeaderModed = () => {
    return (
        <section>
            <section style={{ backgroundColor: '#1B8271' }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-7 col-md-12 px-3'>
                            <div className='row'>
                                <div className='col-lg-6 col-md-12 text-white mt-4'>
                                    <h6>Welcome to Akcel, Crowdfunding & Charity Agency</h6>
                                </div>
                                <div className='col-lg-6 col-md-12 mt-3'>
                                    <button className='text-white sign-up-btn d-flex align-items-center justify-content-center'>
                                        <img alt='login' src="/image/header_moded_login.svg" />
                                        <div className='mx-2 text-success'>Sign Up Now</div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-5 col-md-12'>
                            <div className='row text-white'>
                                <div className='col-lg-6 col-md-12 mt-4 d-flex justify-content-end'>
                                    <img alt="#" src="/image/header_moded_phone.svg" />
                                    <h6 className='px-3'>394-091-3312</h6>
                                </div>
                                <div className='col-lg-6 col-md-12 mt-4 d-flex justify-content-end'>
                                    <img alt="#" src="/image/header_moded_email.svg" />
                                    <h6 style={{ marginLeft: '15px' }}>support@akcel.com</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr style={{ width: '100%', color: 'white' }} className='mt-4' />
                <div className='container mt-4 pb-4'>
                    <div className='row d-flex'>
                        <div className='col-lg-3 col-md-12'>
                            <a href="/">
                                <img alt="#" src="/image/header_moded_logo.svg" />
                            </a>
                        </div>
                        <div className='col-lg-6'>
                            <div className='row text-center d-flex justify-content-center align-items-center'>
                                <h5 className='col mt-4'>
                                    <a href='/' className='header-ref'>Home</a>
                                </h5>
                                <h5 className='col mt-4'>
                                    <a href='/about-us' className='header-ref'>About</a>
                                </h5>
                                <div className='col mt-4'>
                                    <div className='d-flex justify-content-center'>
                                        <h5 className='header-ref mx-4'>Projects</h5>
                                        <img alt="#" src='/image/header_down_arrow_white.svg' />
                                    </div>
                                </div>
                                <h5 className='col mt-4'>
                                    <a href='/latest-news' className='header-ref'>News</a>
                                </h5>
                                <h5 className='col mt-4'>
                                    <a href='/contact-us' className='header-ref'>Contact Us</a>
                                </h5>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-12 mt-2 d-flex justify-content-end'>
                            <button className='button-bg-pink-text-white'>
                                <img alt="user" src="/image/header_moded_user.svg" />
                                <span className='mx-3 text-white'>My Account</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='header-bg'>
                    <div className='container'>
                        <div style={{ backgroundImage: `url(${background})` }} className='header-bg-picture'>
                            <h2 className='text-center text-white header-title'>Let’s find a crowdfunding projects around the world</h2>
                        </div>
                    </div>
                </div>
                <div className='header-input-container row'>
                    <div className='col-lg-3 col-sm-12 d-flex align-items-center justify-content-center px-5'>
                        <select>
                            <option value="All Category">All Category</option>
                        </select>
                    </div>
                    <div className='col-lg-8 col-sm-12 d-flex align-items-center'>
                        <input className='header-input' placeholder='Find Projects' type='text' min='3' max='50' />
                    </div>
                    <div className='col-lg-1 col-sm-12 d-flex align-items-center justify-content-center'>
                        <img alt="search" src='../image/header_bottom_search_moded.svg' />
                    </div>
                </div>
            </section>
            <section className='header-popular-search text-center row'>
                <h5 className='col-lg-3 col-md-12 mt-3'>Popular Search:</h5>
                <h5 className='col-lg-3 col-md-4 mt-3 text-success'>Technology Projects</h5>
                <h5 className='col-lg-3 col-md-4 mt-3 text-success'>Cancer Charity Programs</h5>
                <h5 className='col-lg-3 col-md-4 mt-3 text-success'>Design Interior</h5>
            </section>
        </section>
    )
}

export default HeaderModed;