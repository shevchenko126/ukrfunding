import './index.css';

const WhoWeAre = () => {
	return (
		<div className="container who_we_are">
			<div className="row">
				<div className="col-lg-8 col-md-12">
					<div className="mt-3 mb-3 who_we_are-header d-flex">
						<img src="../image/page2_who_we_are_line.svg" />
						<span className="color1 who_we_are__header">Who We Are</span>
					</div>
					<div className="color2 mb-4 who_we_are__title">Experienced more than 25 Years in Crowdfunding</div>
					<div className="mb-5 who_we_are__main_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</div>
					<div className="who_we_are__item">
						<div className="d-flex">
							<div>
								<img src="../image/page2_who_we_are_trust.svg" className="mt-4 who_we_are__item__icon" />
							</div>
							<div className="mt-4 who_we_are__item__right">
								<div className="who_we_are__item__right__title">Trusted Partner</div>
								<div className="mt-2 pb-4 who_we_are__item__right__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
							</div>
						</div>
					</div>
					<div className="mt-5 mb-5 who_we_are__item">
						<div className="d-flex">
							<div>
								<img src="../image/page2_who_we_are_trust.svg" className="mt-4 who_we_are__item__icon" />
							</div>
							<div className="mt-4 who_we_are__item__right">
								<div className="who_we_are__item__right__title">Responsibility</div>
								<div className="mt-2 pb-4 who_we_are__item__right__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
							</div>
						</div>
					</div>
				</div>   
				<div className="col-lg-4 col-md-12 d-flex align-items-center">
					<img src="../image/page2_who_we_are_panel.svg" className='img-fluid who_we_are__panel' />
				</div>        
			</div>
		</div>
	)
}

export default WhoWeAre;