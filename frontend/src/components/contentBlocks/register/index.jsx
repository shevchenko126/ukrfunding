import './index.css';

const RegisterPage = () => {
	return (
		<div className="container">
			<form className='register' onSubmit={(event) => {
				event.preventDefault();
				alert("successfuly registered");
			}}>
				<h3 className="register-title">Register</h3>
				<h5 className="register-text" for="email">Email</h5>
				<input className="input-login-register" id="email" name="email" placeholder="Write Your Email" type="email" min="5" max="40" />
				<h5 className="register-text" for="name">Name</h5>
				<input className="input-login-register" id="name" name="name" placeholder="Write Your Name" type="text" min="5" max="30" />
				<h5 className="register-text" for="password">Password</h5>
				<input className="input-login-register" id="password" name="password" placeholder="Write New Password" type="password" min="8" max="30" />
				<h5 className="register-text" for="confPassword">Confirm Password</h5>
				<input className="input-login-register" id="confPassword" name="confPassword" placeholder="Confirm New Password" type="password" min="8" max="30" />
				<div className="row register__bottom">
					<div className="col-lg-6 col-sm-12 mt-5 d-flex align-items-center">
						<input type="checkbox" className="register-checkbox" />
						<a href="#">Accept terms & conditions</a>
					</div>
					<div className="col-lg-6 col-sm-12 mt-5 d-flex btn-col">
						<button className="button-bg-pink-text-white">REGISTER</button>
					</div>
				</div>
			</form>
		</div>
	)
}

export default RegisterPage;