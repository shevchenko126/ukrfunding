import './index.css';

const ChangePasswordPage = () => {
    return (
        <section className='container d-flex justify-content-center align-items-center change_pswrd'>
            <div className='text-center'>
                <div className='change_pswrd__title'>Write Your new Email</div>
                <input className='change_pswrd__input' placeholder='Email...' />
                <div className='change_pswrd__title pt-5'>Write Your new Name</div>
                <input className='change_pswrd__input' placeholder='Name...' />
                <div className='change_pswrd__title pt-5'>Write Your new Password</div>
                <input className='change_pswrd__input' placeholder='Password...' />
                <div className='change_pswrd__title pt-5'>Confirm Password</div>
                <input className='change_pswrd__input' placeholder='Confirm Password...' />
                <button className='change_pswrd__btn mt-5'>Save Changes</button>
            </div>
        </section>
    )
};

export default ChangePasswordPage;