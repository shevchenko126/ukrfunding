import '/style.css';

const Register = () => {
	return (
		<div className="container p-0 register">
			<form action="">
				<div className="register__title">Register</div>
				<div className="register__text" for="email">Email</div>
				<input className="register__input" id="email" name="email" placeholder="Write Your Email" type="email" min="5" max="40" />
				<div className="register__text" for="name">Name</div>
				<input className="register__input" id="name" name="name" placeholder="Write Your Name" type="text" min="5" max="30" />
				<div className="register__text" for="password">Password</div>
				<input className="register__input" id="password" name="password" placeholder="Write Your Password" type="password" min="8" max="30" />
				<div className="register__text" for="confPassword">Confirm Password</div>
				<input className="register__input" id="confPassword" name="confPassword" placeholder="Confirm Your Password" type="password" min="8" max="30" />
				<div className="d-flex justify-content-between register__bottom">
					<div className="d-flex">
						<input type="checkbox" className="register__checkbox" />
						<div className="register__accept">Accept terms & conditions</div>
					</div>
					<button className="register__bottom__button">REGISTER</button>
				</div>
			</form>
		</div>
	)
	export default;
}