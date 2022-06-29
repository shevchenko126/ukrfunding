import './index.css';
import SingAp from './img/icons/header_top_singAp_header.svg';
import Phone from './img/icons/header_top_phone_header.svg';
import Email from './img/icons/header_top_email_header.svg'; 
import Logo from './img/logo.png'; 
import User from './img/icons/header_buttom_user_header.svg'; 



const Header = () => {
    return (
        <header className="header">
            <div className="container-fluid">
                <div className="header__top d-flex justify-content-between align-items-center">
                    <div className="header__top_left-block d-flex align-items-center">
                        <div className="header__text-welcome " >
                            Welcome to Akcel, Crowdfunding & Charity Agency
                        </div>
                        <div className="header__button">
                            <button className="button_sing d-flex align-items-center">
                                <img src={SingAp}/>
                                <div className="buttom_sing-text">
                                    Sing Up Now
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="header__top_right-block d-flex justify-content-end">
                        <div className="header__right-block_top d-flex">
                            <div className="header__phone d-flex">
                                <img src={Phone} />
                                <div className="header__phone-number">
                                    394-091-3312
                                </div>
                            </div>
                            <div className="header__email d-flex">
                                <img src={Email} />
                                <div className="header__email-text">
                                    support@akcel.com
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="header__buttom d-flex justify-content-between align-items-center">
                    <div className="header___buttom_left-block d-flex justify-content-start">
                        <div className="header__logo">
                            <img src={Logo} />
                        </div>
                    </div>

                    <div className="header__buttom_right-block d-flex justify-content-end align-items-center">
                        <nav className="mail-menu d-flex justify-content-end align-items-center">
                            <div className="mail-menu__item">
                                <a class="mail-menu__link-home" href="">Home</a>
                            </div>
                            <div className="mail-menu__item">
                                <a className="mail-menu__link active" href="">About</a>
                            </div>
                            <div className="mail-menu__item">
                                <a className="mail-menu__link has-child" href="">Projects</a>
                            </div>
                            <div className="mail-menu__item">
                                <a className="mail-menu__link active" href="">News</a>
                            </div>
                            <div className="mail-menu__item">
                                <a className="mail-menu__link active" href="">Contact Us</a>
                            </div>
                        </nav>
                        <div className="header__right-block_button">
                            <button className="button_account d-flex">
                                <img src={User} />
                                <div className="buttom_account-text">
                                    My Account
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header