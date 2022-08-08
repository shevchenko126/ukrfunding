import './index.css';

const Header = () => {
    return (
        <section>
            <div className='container header-top'>
                <div className='row header__top'>
                    <div className='col-lg-7 col-md-12 header__top__left'>
                        <div className='row'>
                            <div className='col-lg-6 col-md-12 mt-4 header__top__left__text'>
                                <div>Welcome to Akcel, Crowdfunding & Charity Agency</div>
                            </div>
                            <div className='col-lg-6 col-md-12 mt-3'>
                                <button className='text-white header__top__left__button d-flex align-items-center justify-content-center'>
                                    <img src="./image/header_top_singAp.svg" />
                                    <div className='mx-2'>Sign Up Now</div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-5 col-md-12 header__top__right'>
                        <div className='row'>
                            <div className='col-lg-6 col-md-12 mt-4 d-flex header__top__right__phone-email'>
                                <img src="./image/header_top_phone.svg" />
                                <div className='px-3'>394-091-3312</div>
                            </div>
                            <div className='col-lg-6 col-md-12 mt-4 d-flex header__top__right__phone-email'>
                                <img src="./image/header_top_email.svg" />
                                <div style={{ marginLeft: '15px' }}>support@akcel.com</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr style={{ width: '100%', color: 'rgba(0, 0, 0, 0.5)' }} className='mt-4' />
            <div className='container mt-4 header-bottom pb-4'>
                <div className='row d-flex'>
                    <div className='col-lg-3 col-md-12 header-bottom__logo'>
                        <img src="./image/logo_Akcel.png" />
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
                    <div className='col-lg-3 col-md-12 mt-2 d-flex p-0 header-bottom__button'>
                        <button className='header-bottom__button__button'>
                            <img src="./image/header_buttom_user.svg" />
                            <span className='mx-3'>My Account</span>
                        </button>
                    </div>



                </div>
            </div>
        </section>
    )
}

export default Header;





























{/* <img src="./image/header_top_singAp.svg" /> */ }
{/* <img src="./image/header_top_phone.svg" /> */ }
{/* <img src="./image/header_top_email.svg" /> */ }
{/* <img src="./image/logo_Akcel.png" /> */ }
{/* <img src="./image/header_buttom_user.svg" /> */ }