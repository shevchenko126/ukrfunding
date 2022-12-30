import './index.css';

const Page2Categories = () => {

	const categories = [
		{
			img: '../image/page2_categories_icon-head.svg',
			title: 'Quo maxime qui impedit odio soluta',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
		{
			img: '../image/page2_categories_icon-square.svg',
			title: 'Ut nisi ea vero itaque error magnam',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
		{
			img: '../image/page2_categories_icon-medical_bag.svg',
			title: 'Quaerat nobis est',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
		{
			img: '../image/page2_categories_icon-book.svg',
			title: 'Deleniti iure ipsa eos eaque unde',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
	]

	return (
		<div className='container' style={{marginTop: '100px'}}>
			<div className="text-center mx-auto" style={{maxWidth: '805px'}}>
				<h4 className="text-success">CATEGORIES</h4>
				<h2>Why choose Akcel</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis no</p>
			</div>
			<div className="p-0">
				<div className="row d-flex justify-content-between">
					{categories.map(({ img, title, description }) =>
						<div className="col-lg-6 col-md-12">
							<div className="d-flex item mt-5">
								<img src={img} className="categories-main__part__logo" />
								<div style={{ marginLeft: '2%' }}>
									<div className="categories-title mt-2">{title}</div>
									<p className='my-2'>{description}</p>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default Page2Categories;