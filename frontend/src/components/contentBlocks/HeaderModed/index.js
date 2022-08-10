import './index.css';
import background from './bg.svg';

const HeaderModed = () => {
    return (
        <section>
            <section style={{ backgroundColor: '#1B8271' }}>
                <div className='container header-top'>
                    <div className='row header__top'>
                        <div className='col-lg-7 col-md-12 header__top__left px-3'>
                            <div className='row'>
                                <div className='col-lg-6 col-md-12 text-white mt-4 header__top__left__text'>
                                    <div>Welcome to Akcel, Crowdfunding & Charity Agency</div>
                                </div>
                                <div className='col-lg-6 col-md-12 mt-3'>
                                    <button className='text-white header__top__left__button d-flex align-items-center justify-content-center'>
                                        <img src="../image/header_moded_login.svg" />
                                        <div className='mx-2 text-success'>Sign Up Now</div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-5 col-md-12 header__top__right'>
                            <div className='row text-white'>
                                <div className='col-lg-6 col-md-12 mt-4 d-flex header__top__right__phone-email'>
                                    <img src="../image/header_moded_phone.svg" />
                                    <div className='px-3'>394-091-3312</div>
                                </div>
                                <div className='col-lg-6 col-md-12 mt-4 d-flex header__top__right__phone-email'>
                                    <img src="../image/header_moded_email.svg" />
                                    <div style={{ marginLeft: '15px' }}>support@akcel.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr style={{ width: '100%', color: 'white' }} className='mt-4' />
                <div className='container mt-4 header-bottom pb-4'>
                    <div className='row d-flex'>
                        <div className='col-lg-3 col-md-12 header-bottom__logo'>
                            <img src="../image/header_moded_logo.svg" />
                        </div>
                        <div className='col-lg-6'>
                            <div className='row text-center d-flex justify-content-center align-items-center'>
                                <div className='col mt-4'>
                                    <a href='' className='header-bottom__ref'>Home</a>
                                </div>
                                <div className='col mt-4'>
                                    <a href='' className='header-bottom__ref'>About</a>
                                </div>
                                <div className='col mt-4'>
                                    <div className='d-flex justify-content-center'>
                                        <div className='header-bottom__ref mx-2'>Projects</div>
                                        <img src='./image/header_down_arrow.svg' />
                                    </div>
                                </div>
                                <div className='col mt-4'>
                                    <a href='' className='header-bottom__ref'>News</a>
                                </div>
                                <div className='col mt-4'>
                                    <a href='' className='header-bottom__ref'>Contact Us</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-12 mt-2 d-flex header-bottom__button'>
                            <button className='header-bottom__button__button'>
                                <img src="../image/header_moded_user.svg" />
                                <span className='mx-3 text-white'>My Account</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='header_modes-bg'>
                    <div className='container header_modes'>
                        <div style={{ backgroundImage: `url(${background})` }} className='header_modes-bg-picture'>
                            <div className='text-center text-white header_modes__title'>Let’s find a crowdfunding projects around the world</div>
                        </div>
                    </div>
                </div>
                <div className='input pb-2 row'>
                    <div className='col-lg-3 col-sm-12 d-flex align-items-center justify-content-center px-5'>
                        <div className='input__category'>All Category</div>
                        <img src='../image/header_down_arrow.svg' style={{ marginLeft: '30px' }} />
                    </div>
                    <div className='col-lg-8 col-sm-12 d-flex align-items-center'>
                        <input className='input__input' placeholder='Find Projects' type='text' min='3' max='50' />
                    </div>
                    <div className='col-lg-1 col-sm-12 d-flex align-items-center justify-content-center'>
                        <img src='../image/header_buttom_user.svg' />
                    </div>
                </div>
            </section>
            <section className='popular_search text-center row'>
                <div className='col-lg-3 col-md-12 mt-3 popular_search__search'>Popular Search:</div>
                <div className='col-lg-3 col-md-4 mt-3'>
                    <a href='' className='popular_search__search search color1'>Technology Projects</a>
                </div>
                <div className='col-lg-3 col-md-4 mt-3 color1 popular_search__search search'>
                    <a href='' className='popular_search__search search color1'>Cancer Charity Programs</a>
                </div>
                <div className='col-lg-3 col-md-4  mt-3 color1 popular_search__search search'>
                    <a href='' className='popular_search__search search color1'>Design Interior</a>
                </div>
            </section>
        </section>
    )
}

export default HeaderModed;