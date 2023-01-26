import { VscClose } from 'react-icons/vsc';

const PopupDonate = (props) => {
    return (
        <div className="popup-donate">
            <div className='register'>
                <div className='d-flex justify-content-end'>
                    <button className='close-popup' onClick={props.closePopup}>
                        <VscClose className='close-icon' />
                    </button>
                </div>
                <form onSubmit={(event) => {
                    event.preventDefault();
                    alert("successfuly donated");
                }}>
                    <h4 className="register-title text-center">Donate to:</h4>
                    <h3 className='text-center'>{props.donateTo}</h3>
                    <h5 className="register-text" for="name">Name</h5>
                    <input className="input-login-register" id="name" name="name" placeholder="Write Your Name" type="text" min="5" max="30" />
                    <h5 className="register-text" for="fund">Summ to donate</h5>
                    <input className="input-login-register" id="fund" name="fund" placeholder="Write Summ to Fund" type="number" />
                    <h5 className="register-text" for="confPassword">Confirm Your Password</h5>
                    <input className="input-login-register" id="confPassword" name="confPassword" placeholder="Confirm Password" type="password" min="8" max="30" />
                    <div className="row register__bottom">
                        <div className="col-lg-6 col-sm-12 mt-5 d-flex align-items-center">
                            <input type="checkbox" className="register-checkbox" />
                            <a href="#">Accept terms & conditions</a>
                        </div>
                        <div className="col-lg-6 col-sm-12 mt-5 d-flex btn-col">
                            <button type="submit" className="button-bg-pink-text-white">Donate</button>
                        </div>
                    </div>
                </form>
            </div>
        </div >
    );
};

export default PopupDonate;