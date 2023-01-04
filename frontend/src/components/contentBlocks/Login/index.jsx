import './index.css';

const LoginPage = () => {
	return (
		<div className="container">
			<form className='register' onSubmit={(event) => {
				event.preventDefault();
				alert("successfuly logined");
			}}>
				<h3>Login</h3>
				<h5 className="register-text" for="name">Name</h5>
				<input className="register-input" id="name" name="name" placeholder="Write Your Name" type="text" min="5" max="30" />
				<h5 className="register-text" for="password">Password</h5>
				<input className="register-input" id="password" name="password" placeholder="Write Your Password" type="password" min="5" max="30" />
				<div className="row align-items-center">
					<div className="col-lg-6 col-sm-12 mt-3 d-flex align-items-center">
						<input type="checkbox" className="register-checkbox" />
						Remember Me
					</div>
					<div className="col-lg-6 col-sm-12 mt-3 d-flex btn-col">
						<a href="https://www.google.com" target="_blank">
							<span>Forgot Password?</span>
						</a>
					</div>
				</div>
				<div className='d-flex justify-content-center mt-3'>
					<button className="button-bg-pink-text-white">Login</button>
				</div>
			</form>
		</div>
	);
};

export default LoginPage;