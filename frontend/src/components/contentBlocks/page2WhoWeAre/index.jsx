import './index.css';

const WhoWeAre = () => {
	return (
		<div className="container who_we_are">
			<div className="row">
				<div className="col-lg-8 col-md-12">
					<div className="mt-3 mb-3 d-flex">
						<img alt="#" src="../image/page2_who_we_are_line.svg" />
						<h4 className="text-success mx-3">Who We Are</h4>
					</div>
					<div style={{ maxWidth: '669px' }}>
						<h2 className="mb-4">Experienced more than 25 Years in Crowdfunding</h2>
						<p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
					</div>
					<div className="item" style={{ maxWidth: '802px' }}>
						<div className="d-flex">
							<div>
								<img alt="#" src="../image/page2_who_we_are_trust.svg" className="mt-4 who_we_are__item__icon" />
							</div>
							<div className="mt-4 who_we_are__item__right">
								<div className="who-title">Trusted Partner</div>
								<div className="mt-2 pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
							</div>
						</div>
					</div>
					<div className="mt-5 mb-5 item" style={{ maxWidth: '802px' }}>
						<div className="d-flex">
							<div>
								<img alt="#" src="../image/page2_who_we_are_trust.svg" className="mt-4 who_we_are__item__icon" />
							</div>
							<div className="mt-4 who_we_are__item__right">
								<div className="who-title">Responsibility</div>
								<div className="mt-2 pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-12 d-flex align-items-center">
					<img alt="#" src="../image/page2_who_we_are_panel.svg" className='img-fluid who_we_are__panel' />
				</div>
			</div>
		</div>
	)
}

export default WhoWeAre;