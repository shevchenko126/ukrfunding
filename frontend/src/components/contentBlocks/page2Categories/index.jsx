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
		<div className='container' style={{ maxWidth: '1620px' }}>
			<div className="text-center p-0 categories">
				<div className="categories__header">CATEGORIES</div>
				<div className="categories__title">Why choose Akcel</div>
				<div className="categories__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis no</div>
			</div>
			<div className="p-0 categories-main">
				<div className="row d-flex justify-content-between">
					{categories.map(({ img, title, description }) =>
						<div className="col-lg-6 col-md-12">
							<div className="d-flex categories-main__part mt-5">
								<img src={img} className="categories-main__part__logo" />
								<div style={{ marginLeft: '3%' }}>
									<div className="categories-main__part__title">{title}</div>
									<div className="categories-main__part__text">{description}</div>
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