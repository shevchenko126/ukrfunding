import './index.css';

const Page2Categories = () => {
	return (
		<div className='container' style={{maxWidth: '1620px'}}>
			<div className="text-center p-0 categories">
				<div className="categories__header">CATEGORIES</div>
				<div className="categories__title">Why choose Akcel</div>
				<div className="categories__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis no</div>
			</div>
			<div className="p-0 categories-main">
				<div className="row d-flex justify-content-between">
					<div className="col-lg-6 col-md-12"> 
						<div className="d-flex categories-main__part mt-5">
							<img src="../image/page2_categories_icon-head.svg" className="categories-main__part__logo" />
							<div style={{marginLeft: '3%'}}>
								<div className="categories-main__part__title">Quo maxime qui impedit odio soluta</div>
								<div className="categories-main__part__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
							</div>
						</div>
					</div>		
					<div className="col-lg-6 col-md-12"> 
						<div className="d-flex categories-main__part mt-5">
							<img src="../image/page2_categories_icon-square.svg" className="categories-main__part__logo" />
							<div style={{marginLeft: '3%'}}>
								<div className="categories-main__part__title">Ut nisi ea vero itaque error magnam</div>
								<div className="categories-main__part__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
							</div>
						</div>
					</div>
				</div>
				<div className="row d-flex justify-content-between">
					<div className="col-lg-6 col-md-12">
						<div className="d-flex categories-main__part mt-5">
							<img src="../image/page2_categories_icon-medical_bag.svg" className="categories-main__part__logo" />
							<div style={{marginLeft: '3%'}}>
								<div className="categories-main__part__title">Quaerat nobis est</div>
								<div className="categories-main__part__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-12">
						<div className="d-flex categories-main__part mt-5">
							<img src="../image/page2_categories_icon-book.svg" className="categories-main__part__logo" />
							<div style={{marginLeft: '3%'}}>
								<div className="categories-main__part__title">Deleniti iure ipsa eos eaque unde</div>
								<div className="categories-main__part__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>		
	)
}

export default Page2Categories;