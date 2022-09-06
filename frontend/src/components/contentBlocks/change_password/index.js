import './index.css';

const ChangePasswordPage = () => {
    return (
        <div className="container p-0 change">
            <form action="">
                <div className="change__title">Change</div>
                <div className="change__text" for="email">New Email</div>
                <input className="change__input" id="email" name="email" placeholder="Write Your Email" type="email" min="5" max="40" />
                <div className="change__text" for="name">New Name</div>
                <input className="change__input" id="name" name="name" placeholder="Write Your Name" type="text" min="5" max="30" />
                <div className="change__text" for="password">Change Password</div>
                <input className="change__input" id="password" name="password" placeholder="Write New Password" type="password" min="8" max="30" />
                <div className="change__text" for="confPassword">Confirm Password</div>
                <input className="change__input" id="confPassword" name="confPassword" placeholder="Confirm New Password" type="password" min="8" max="30" />
                <div className='d-flex justify-content-center'>
                    <button className="change__button">ACCEPT</button>
                </div>
            </form>
        </div>
    )
}

export default ChangePasswordPage;