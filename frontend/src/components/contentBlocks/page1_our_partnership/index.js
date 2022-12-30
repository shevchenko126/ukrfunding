import './index.css';

const OurPartnership = () => {

	const partners = [
		{
			src: './image/page_1_our_partnership_highlow.svg'
		},
		{
			src: './image/page_1_our_partnership_boost.svg'
		},
		{
			src: './image/page_1_our_partnership_emajine.svg'
		},
		{
			src: './image/page_1_our_partnership_manthul.svg'
		},
		{
			src: './image/page_1_our_partnership_glowup.svg'
		},
	]

	return (
		<div className="container logotypes text-center">
			<h3>Our Partnership</h3>
			<div className="row">
				{partners.map(({ src }) => (
					<div className="col mt-5">
						<img src={src} alt="partner" />
					</div>
				))}
			</div>
		</div>
	)
}

export default OurPartnership;