import './index.css';

const Contact = () => {
	return (
		<div>
			<div className="container mt-5">
				<h2 className="text-center">Contact Us</h2>
				<p className="mt-4 text-center mx-auto contact-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				<div className="row mt-5">
					<div className="col-lg-4 cold-sm-12">
						<div className="d-flex">
							<div>
								<img src="/image/page_6_phone.svg" />
							</div>
							<div style={{ marginLeft: '20px' }}>
								<h4 className="mt-3">Telephone</h4>
								<h5 className="mt-4">394-091-3312</h5>
							</div>
						</div>
					</div>
					<div className="col-lg-4 cold-sm-12">
						<div className="d-flex">
							<div>
								<img src="/image/page_6_email.svg" />
							</div>
							<div style={{ marginLeft: '20px' }}>
								<h4 className="mt-3">Mail</h4>
								<h5 className="mt-4">support@akcel.com</h5>
							</div>
						</div>
					</div>
					<div className="col-lg-4 cold-sm-12">
						<div className="d-flex">
							<div>
								<img src="/image/page_6_location.svg" />
							</div>
							<div style={{ marginLeft: '20px' }}>
								<h4 className="mt-3">Our Address</h4>
								<h5 className="mt-4">832  Thompson Drive, San Fransisco CA 94107, United States</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
			<form onSubmit={(event) => {
				event.preventDefault();
				alert('form sended successfuly')
			}}>
				<div className="contact-form bg-white mx-auto">
					<h3 className="pt-5 px-5 pb-3">Write us a message</h3>
					<div className="row mx-5 d-flex justify-content-between">
						<div className="p-0 mt-5 col-xl-5 col-lg-12">
							<h5 className="contact-item-text" for="fname">Full Name</h5>
							<div>
								<input className="contact-input mt-4" placeholder="Your Name" id="fname" name="fname" type="text" min="5" max="40" />
							</div>
						</div>
						<div className="p-0 mt-5 col-xl-5 col-lg-12">
							<h5 className="contact-item-text" for="eadress">Email Address</h5>
							<div>
								<input className="contact-input mt-4" placeholder="Your email" id="eadress" name="eadress" type="email" min="5" max="40" />
							</div>
						</div>
					</div>
					<div className="row mx-5 d-flex justify-content-between">
						<div className="p-0 mt-5 col-xl-5 col-lg-12">
							<h5 className="contact-item-text" for="number">Phone Number</h5>
							<div>
								<input className="contact-input mt-4" placeholder="Your Phone-number" id="number" name="number" type="tel" min="5" max="40" />
							</div>
						</div>
						<div className="mb-5 p-0 mt-5 col-xl-5 col-lg-12">
							<h5 className="contact-item-text" for="cname">Company Name</h5>
							<div>
								<input className="contact-input mt-4" placeholder="Your Company" id="cname" name="cname" type="text" min="5" max="50" />
							</div>
						</div>
					</div>
					<h5 className="mt-3 mx-5 contact-item-text" for="message">Message</h5>
					<input className="mt-4 mx-5 contact-message" type="text" placeholder="Write Text here..." id="message" name="message" min="5" max="250" />
					<div className="row mx-5 mt-5">
						<div className="col-lg-6 col-md-12 p-0 d-flex align-items-center mt-4">
							<input type="checkbox" className="contact-checkbox" />
							<div className="mx-3">Accept terms & conditions</div>
						</div>
						<div className="col-lg-6 col-md-12 p-0 mt-3 d-flex justify-content-end">
							<button
								className="text-white text-uppercase button-bg-pink-text-white btn-contact"
								type='submit'>Send</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	)
}

export default Contact;