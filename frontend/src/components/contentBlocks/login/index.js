import '/index.css';

const Login = () => {
	return (
		<div className="container p-0">
			<form action="">
				<div className="login__form">
					<div className="login__form__title">Login</div>
					<div className="login__form__text">
						<label for="uname">User Name</label>
					</div>
					<input type="text" id="uname" name="uname" placeholder="Enter Username" className="login__form__input" />
					<div className="login__form__text">
						<label for="password">Password</label>
					</div>
					<input type="password" id="password" name="password" placeholder="Enter Password" className="login__form__input" />
					<div className="row login__form__rem-me_forgot-pass">
						<div className="col-lg-6 col-sm-12 mt-3">
							<span>
								<input type="checkbox" className="login__form__checkbox" />
							</span>
							<span className="login__form__rem-me_forgot-pass__rem-me">Remember Me</span>
						</div>
						<div className="col-lg-6 col-sm-12 mt-3">
							<a href="https://www.google.com" target="_blank" className="login__form__forgot-password">
								<span>Forgot Password?</span>
							</a>
						</div>
					</div>
					<div>
						<button className="login__form__login">Login</button>
					</div>
				</div>
			</form>
		</div>
	)
	export default;
}