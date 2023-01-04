import './index.css';

const ChangePasswordPage = () => {
    return (
        <div className="container p-0">
            <form className='change' onSubmit={(event) => {
                event.preventDefault();
                alert("successfuly changed");
            }}>
                <h3 className="change-title">Changes</h3>
                <h5 className="change-text" for="email">New Email</h5>
                <input className="change-input" id="email" name="email" placeholder="Write Your Email" type="email" min="5" max="40" />
                <h5 className="change-text" for="name">New Name</h5>
                <input className="change-input" id="name" name="name" placeholder="Write Your Name" type="text" min="5" max="30" />
                <h5 className="change-text" for="password">Change Password</h5>
                <input className="change-input" id="password" name="password" placeholder="Write New Password" type="password" min="8" max="30" />
                <h5 className="change-text" for="confPassword">Confirm Password</h5>
                <input className="change-input" id="confPassword" name="confPassword" placeholder="Confirm New Password" type="password" min="8" max="30" />
                <div className='d-flex justify-content-center'>
                    <button className="button-bg-pink-text-white mt-3">ACCEPT</button>
                </div>
            </form>
        </div>
    )
}

export default ChangePasswordPage;