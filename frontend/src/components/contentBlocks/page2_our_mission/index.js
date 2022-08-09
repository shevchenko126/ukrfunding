import './index.css';

const OurMission = () => {
	return (
		<div className="container our_mission">
			<div className="row">
				<div className="col-lg-6 col-md-12 d-flex align-items-center">
					<img src="../image/page2_our_mission_panel.svg" className="img-fluid our_mission__panel" />
				</div>
				<div className="col-lg-6 col-md-12">
					<div className="d-flex our_mission-mission mt-5">
						<img src="../image/page2_our_mission_rectangle.svg" />
						<div className="mx-3 mt-2 our_mission__title text-success h4">Our Mission</div>
					</div>
					<div className="mt-5 our_mission__main">Change The World for Better Futures</div>
					<div className="mt-5 our_mission__main_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</div>
					<div className="row mt-4">
						<div className="col-lg-3 col-md-12">
							<div className="our_mission__number mt-3">4,556</div>
							<div className="our_mission__number_text mt-3">Total Donor</div>
						</div>
						<div className="col-lg-3 col-md-12 mt-3">
							<div className="our_mission__number">874</div>
							<div className="our_mission__number_text mt-3">Projects</div>
						</div>
						<div className="col-lg-6 col-md-12 mt-3">
							<div className="our_mission__number">$ 195,234k</div>
							<div className="our_mission__number_text mt-3">Total Donation</div>
						</div>
					</div>
					<div className="mt-4">
						<img src="../image/page2_our_mission_line.svg" className="img-fluid" />
					</div>
					<div className="row mx-3 our_mission-buttons">
						<div className="col-lg-4 col-md-12 mt-5">
							<button className="our_mission__button__first">
								<div className="d-flex">
									<div className="text-white mx-3">See Projects</div>
									<img src="../image/page2_our_mission_vector.svg" className="mx-3" />
								</div>
							</button>
						</div>
						<div className="col-lg-4 col-md-12 mt-5">
							<button className="text-secondary bg-light our_mission__button__second">How It Works</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default OurMission;