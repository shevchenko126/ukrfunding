import './index.css';

const Numbers = () => {
	return (
		<div className="background_container d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url("../image/page1_background.svg")' }}>
			<div className="container">
				<div className="row text-center text-white">
					<div className="col-lg-3 col-md-6">
						<div>
							<div className="numbers_container">23,577</div>
							<div className="text_container">Total Donor</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div>
							<div className="numbers_container">978k</div>
							<div className="text_container">Donations</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div>
							<div className="numbers_container">762</div>
							<div className="text_container">Projects</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div>
							<div className="numbers_container">852k</div>
							<div className="text_container">Companies</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Numbers;