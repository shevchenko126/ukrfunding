import './index.css';

const ChangePasswordPage = () => {
    return (
        <div className="container p-0 register">
            <form action="">
                <div className="register__title">Change</div>
                <div className="register__text" for="email">New Email</div>
                <input className="register__input" id="email" name="email" placeholder="Write Your Email" type="email" min="5" max="40" />
                <div className="register__text" for="name">New Name</div>
                <input className="register__input" id="name" name="name" placeholder="Write Your Name" type="text" min="5" max="30" />
                <div className="register__text" for="password">Change Password</div>
                <input className="register__input" id="password" name="password" placeholder="Write New Password" type="password" min="8" max="30" />
                <div className="register__text" for="confPassword">Confirm Password</div>
                <input className="register__input" id="confPassword" name="confPassword" placeholder="Confirm New Password" type="password" min="8" max="30" />
                <div className="row register__bottom">
                    <button className="register__bottom__button-change">ACCEPT</button>
                </div>
            </form>
        </div>
    )
}

export default ChangePasswordPage;