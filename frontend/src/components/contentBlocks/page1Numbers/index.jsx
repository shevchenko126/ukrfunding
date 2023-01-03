import './index.css';

const Numbers = () => {

	const info = [
		{
			number: '23,577',
			text: 'Total Donor'
		},
		{
			number: '978k',
			text: 'Donations'
		},
		{
			number: '762',
			text: 'Projects'
		},
		{
			number: '852k',
			text: 'Companies'
		},
	]

	return (
		<div className="background_container d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url("../image/page1_background.svg")' }}>
			<div className="container">
				<div className="row text-center text-white">
					{info.map((i) => (
						<div className="col-lg-3 col-md-6">
							<div className="text-white">
								<h2>{i.number}</h2>
								<div className='donations-text'>{i.text}</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Numbers;