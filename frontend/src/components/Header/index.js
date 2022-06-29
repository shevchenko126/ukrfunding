import './index/css';

// Діма, не знаю як бути з картинками, якщо ніхто не допоможе, то залишаю роботу таку як зараз.
//Погуглила, показує глобально. Вибач. Не впевнена, що вірно зробила импорт css

const Header = () => {
    return(
        <header class = "header">
            <div class="container-fluid">
                <div class="header__top d-flex justify-content-between align-items-center">
                    <div class="header__top_left-block d-flex align-items-center">
                        <div class="header__text-welcome " >
                            Welcome to Akcel, Crowdfunding & Charity Agency
                        </div>
                        <div class="header__button">
                            <button class="button_sing d-flex align-items-center">
                                <img src="img/icons/header_top_singAp.svg" />
                                <div class="buttom_sing-text">
                                    Sing Up Now
                                </div>
                            </button>
                        </div>
                    </div>
                    <div class="header__top_right-block d-flex justify-content-end">
                        <div class="header__right-block_top d-flex">
                            <div class="header__phone d-flex">
                                <img src="img/icons/header_top_phone.svg" />
                                <div class="header__phone-number">
                                    394-091-3312
                                </div>
                            </div>
                            <div class="header__email d-flex">
                                <img src="img/icons/header_top_email.svg" />
                                <div class="header__email-text">
                                    support@akcel.com
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="header__buttom d-flex justify-content-between align-items-center">
                    <div class="header___buttom_left-block d-flex justify-content-start">
                        <div class="header__logo">
                            <img src="img/logo.png" />
                        </div>
                    </div>

                    <div class="header__buttom_right-block d-flex justify-content-end align-items-center">
                        <nav class="mail-menu d-flex justify-content-end align-items-center">
                            <div class="mail-menu__item">
                                <a class="mail-menu__link-home" href="">Home</a>
                            </div>
                            <div class="mail-menu__item">
                                <a class="mail-menu__link active" href="">About</a>
                            </div>
                            <div class="mail-menu__item">
                                <a class="mail-menu__link has-child" href="">Projects</a>
                            </div>
                            <div class="mail-menu__item">
                                <a class="mail-menu__link active" href="">News</a>
                            </div>
                            <div class="mail-menu__item">
                                <a class="mail-menu__link active" href="">Contact Us</a>
                            </div>
                        </nav>
                        <div class="header__right-block_button">
                            <button class="button_account d-flex">
                                <img src="img/icons/header_buttom_user.svg" />
                                <div class="buttom_account-text">
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