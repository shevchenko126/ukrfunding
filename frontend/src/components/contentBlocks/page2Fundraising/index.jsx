import './index.css';

const Fundraising = () => {
	return (
		<div>
			<div className="container-fluid fundraising_main"></div>
			<div className="container fundraising_main__into">
				<div className="row">
					<div className="col-lg-5 p-0 fundraising_main__into__photo">
						<img alt="#" src="../image/page2_fundraising_icon_image.svg" className="img-fluid fundraising_main__into__img" />
					</div>
					<div className="col-lg-7 px-4 mt-5 d-flex align-items-center">
						<div>
							<h2>Fundraising is the gentle art of teaching the joy of giving</h2>
							<p className="my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
							<div>
								<div>
									<img alt="#" src="../image/page2_fundraising_william.svg" className="mt-5" />
								</div>
								<p className="mt-5 pb-5">William Durant</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Fundraising;