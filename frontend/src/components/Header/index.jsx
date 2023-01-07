import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import './index.css';


const Header = () => {

    const user = 'loginned'; /* registered, unregistered */

    return (
        <section>
            <div className='container'>
                <div className='row d-flex align-items-center mt-4'>
                    <div className='col-lg-6 col-md-12 px-3 title row d-flex align-items-center'>
                        <h6 className='col-lg-12 col-md-12 title-title'>Welcome to Akcel, Crowdfunding & Charity Agency</h6>
                        <div className='col-md-12 btn-top title'>
                            <Link to={user === 'loginned' ? '/profile' : user === 'registered' ? '/login' : '/register'}>
                                <button className='button-bg-white-text-pink'>
                                    <img alt="user" src='/image/header_bottom_user.svg' />
                                    <span className='mx-3'>{user === 'loginned' ? 'My Account' : user === 'registered' ? 'Sign In Now' : 'Sign Up Now'}</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-12 contacts'>
                        <div className='row'>
                            <div className='col-lg-6 col-md-12 d-flex header-top-email-phone'>
                                <img src="/image/header_top_phone.svg" alt="phone" />
                                <h6 className='px-3 mb-0'>394-091-3312</h6>
                            </div>
                            <div className='col-lg-6 col-md-12 d-flex header-top-email-phone'>
                                <img src="/image/header_top_email.svg" alt="email" />
                                <h6 className='mb-0' style={{ marginLeft: '15px' }}>support@akcel.com</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr style={{ width: '100%', color: 'rgba(0, 0, 0, 0.5)' }} className='mt-4' />
            <div className='container mt-4 pb-4'>
                <div className='row d-flex align-items-center'>
                    <div className='col-lg-3 col-6'>
                        <a href="/">
                            <img className='logo-icon' src="/image/logo_Akcel.png" alt="logo" />
                        </a>
                    </div>
                    <div className='col-lg-6 header-refs'>
                        <div className='row text-center d-flex justify-content-center align-items-center'>
                            <h5 className='col'>
                                <Link to='/' className='header-bottom__ref'>Home</Link>
                            </h5>
                            <h5 className='col'>
                                <Link to='/about' className='header-bottom__ref'>About</Link>
                            </h5>
                            <h5 className='col'>
                                <Link to='/projects' className='header-bottom__ref'>Projects</Link>
                            </h5>
                            <h5 className='col'>
                                <Link to='/news' className='header-bottom__ref'>News</Link>
                            </h5>
                            <h5 className='col'>
                                <Link to='/contact' className='header-bottom__ref'>Contact Us</Link>
                            </h5>
                        </div>
                    </div>
                    <div className='col-lg-3 col-6 mt-2'>
                        <div className='header-bottom__button'>
                            <Link to={user === 'loginned' ? '/profile' : user === 'registered' ? '/login' : '/register'}>
                                <button className='button-bg-white-text-pink'>
                                    <img alt="user" src='/image/header_bottom_user.svg' />
                                    <span className='mx-3'>{user === 'loginned' ? 'My Account' : user === 'registered' ? 'Sign In Now' : 'Sign Up Now'}</span>
                                </button>
                            </Link>
                        </div>
                        <div className='burger-menu-col'>
                            <AiOutlineMenu className='burger-menu' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header;