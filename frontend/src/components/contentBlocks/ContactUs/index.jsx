import './index.css';

const Contact = () => {
	return (
		<div>
			<div className="container mt-5 contact_header">
				<div className="text-center contact_header__title">Contact Us</div>
				<div className="mt-4 text-center contact_header__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
				<div className="row mt-5" id='contact_header-row'>
					<div className="col-lg-4 cold-sm-12 contact_header__item">
						<div className="d-flex">
							<div>
								<img src="../image/page_6_phone.svg" />
							</div>
							<div style={{ marginLeft: '20px' }}>
								<div className="mt-3 contact_header__item__title">Telephone</div>
								<div className="mt-4 contact_header__item__text">394-091-3312</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 cold-sm-12 contact_header__item">
						<div className="d-flex">
							<div>
								<img src="../image/page_6_email.svg" />
							</div>
							<div style={{ marginLeft: '20px' }}>
								<div className="mt-3 contact_header__item__title">Telephone</div>
								<div className="mt-4 contact_header__item__text">support@akcel.com</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 cold-sm-12 contact_header__item">
						<div className="d-flex">
							<div>
								<img src="../image/page_6_location.svg" />
							</div>
							<div style={{ marginLeft: '20px' }}>
								<div className="mt-3 contact_header__item__title">Our Address</div>
								<div className="mt-4 contact_header__item__text">832  Thompson Drive, San Fransisco CA 94107, United States</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<form onSubmit={(event) => {
				event.preventDefault();
				alert('form sended successfuly')
			}}>
				<div className="contact_main__form bg-white">
					<div className="contact_main__form__title pt-5 px-5 pb-3">Write us a message</div>
					<div className="row mx-5">
						<div className="p-0 mt-5 col-xl-6 col-lg-12">
							<div className="contact_main__form__text" for="fname">Full Name</div>
							<div>
								<input className="contact_main__form__input mt-4" placeholder="Your Name" id="fname" name="fname" type="text" min="5" max="40" />
							</div>
						</div>
						<div className="p-0 mt-5 col-xl-6 col-lg-12">
							<div className="contact_main__form__text" for="eadress">Email Address</div>
							<div>
								<input className="contact_main__form__input mt-4" placeholder="Your email" id="eadress" name="eadress" type="email" min="5" max="40" />
							</div>
						</div>
					</div>
					<div className="row mx-5">
						<div className="p-0 mt-5 col-xl-6 col-lg-12">
							<div className="contact_main__form__text" for="number">Phone Number</div>
							<div>
								<input className="contact_main__form__input mt-4" placeholder="Your Phone-number" id="number" name="number" type="tel" min="5" max="40" />
							</div>
						</div>
						<div className="mb-5 p-0 mt-5 col-xl-6 col-lg-12">
							<div className="contact_main__form__text" for="cname">Company Name</div>
							<div>
								<input className="contact_main__form__input mt-4" placeholder="Your Company" id="cname" name="cname" type="text" min="5" max="50" />
							</div>
						</div>
					</div>
					<div className="mt-3 mx-5 contact_main__form__text" for="message">Message</div>
					<input className="mt-4 mx-5 contact_main__form__input_main" type="text" placeholder="Write Text here..." id="message" name="message" min="5" max="250" />
					<div className="row mx-5 mt-5">
						<div className="col-lg-6 col-md-12 p-0 d-flex mt-4">
							<input type="checkbox" className="contact_main__form__checkbox" />
							<div className="mx-3">Accept terms & conditions</div>
						</div>
						<div className="col-lg-6 col-md-12 p-0 mt-3 text-center">
							<button
								className="text-white text-uppercase contact_main__form__btn"
								type='submit'>Send</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	)
}

export default Contact;