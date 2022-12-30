import './index.css';

const OurMission = () => {
	return (
		<div className="container our_mission">
			<div className="row">
				<div className="col-lg-6 col-md-12 d-flex align-items-center">
					<img alt="#" src="../image/page2_our_mission_panel.svg" className="img-fluid our-mission-panel" />
				</div>
				<div className="col-lg-6 col-md-12">
					<div className="d-flex mt-5">
						<img alt="#" src="../image/page2_our_mission_rectangle.svg" />
						<h4 className="mx-3 text-success">Our Mission</h4>
					</div>
					<div style={{ maxWidth: '669px' }}>
						<h2 className="mt-4">Change The World for Better Futures</h2>
						<p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
					</div>
					<div className="row">
						<div className="col-xxl-4 mt-3">
							<h2>4,556</h2>
							<h4>Total Donor</h4>
						</div>
						<div className="col-xxl-3 mt-3">
							<h2>874</h2>
							<h4>Projects</h4>
						</div>
						<div className="col-xxl-5 mt-3">
							<h2>$ 195,234k</h2>
							<h4>Total Donation</h4>
						</div>
					</div>
					<div className="mt-4">
						<img alt="#" src="../image/page2_our_mission_line.svg" className="img-fluid" />
					</div>
					<div className="row">
						<div className="col-lg-4 col-md-12 mt-5">
							<button className="button-bg-pink-text-white">
								<div className="d-flex">
									<div className="text-white">See Projects</div>
									<img alt="#" src="../image/page2_our_mission_vector.svg" style={{ marginLeft: '20px' }} />
								</div>
							</button>
						</div>
						<div className="col-lg-4 col-md-12 mt-5">
							<button className="button-bg-white-text-gray">How It Works</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default OurMission;