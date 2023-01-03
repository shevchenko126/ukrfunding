import './index.css';

const Donate = () => {
	return (
		<div className="container donate_to" style={{backgroundImage: 'url(/image/page4_donate_hand.svg)'}}>
			<div className="donate-title">
				<div>Donate to</div>
				<div>World Cancer Society</div>
			</div>
			<p className="donate-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
			<button className='donate-btn button-bg-pink-text-white d-flex justify-content-between align-items-center'>
				<span className='mx-3'>Donate Now</span>
				<img src='../image/page4_donate_heart.svg' style={{marginRight: '15px'}} />	
			</button>
		</div>
	)
}

export default Donate;