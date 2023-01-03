import './index.css';

const Donate = () => {
	return (
		<div className="container donate_to" style={{backgroundImage: 'url(../image/page4_donate_hand.svg)'}}>
			<div className="donate_to__text">
				<div>Donate to</div>
				<div>World Cancer Society</div>
			</div>
			<div className="donate_to__main-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
			<button className='donate_to__btn text-white d-flex justify-content-between align-items-center'>
				<span className='mx-3'>Donate Now</span>
				<img src='../image/page4_donate_heart.svg' style={{marginRight: '15px'}} />	
			</button>
		</div>
	)
}

export default Donate;