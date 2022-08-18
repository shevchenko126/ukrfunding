import './index.css';

const Categories = () => {
	return (
		<div className="container p-0 categories">
			<div className="categories__header text-uppercase">categories</div>
			<div className="categories__title">Explore Our Crowdfunding Categories</div>
			<div className='d-flex justify-content-center mb-5'>
				<div className='categories__input'>
					<input type='text' max='35' placeholder='Find Categories' className='px-4 categories__input__input' />
					<button className='categories__input__btn'>
						<img src='/image/header_bottom_search_moded.svg' />
					</button>
				</div>
			</div>
			<div className="row categories-row d-flex justify-content-center">
				<div className="col-xxl-3 col-xl-4 col-lg-6 col-md-12 mt-4 p-0">
					<div className="categories__item">
						<img src="/image/page11_categories_glasses.svg" className="categories__item__icon" />
						<div className="categories__item__category">Technology</div>
						<div className="categories__item__text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, tota</div>
					</div>
				</div>
				<div className="col-xxl-3 col-xl-4 col-lg-6 col-md-12 mt-4 p-0">
					<div className="categories__item">
						<img src="/image/page11_categories_book.svg" className="categories__item__icon" />
						<div className="categories__item__category">Education</div>
						<div className="categories__item__text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, tota</div>
					</div>
				</div>
				<div className="col-xxl-3 col-xl-4 col-lg-6 col-md-12 mt-4 p-0">
					<div className="categories__item">
						<img src="/image/page11_categories_camera.svg" className="categories__item__icon" />
						<div className="categories__item__category">Videos</div>
						<div className="categories__item__text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, tota</div>
					</div>
				</div>
				<div className="col-xxl-3 col-xl-4 col-lg-6 col-md-12 mt-4 p-0">
					<div className="categories__item">
						<img src="/image/page11_categories_bag.svg" className="categories__item__icon" />
						<div className="categories__item__category">Medical</div>
						<div className="categories__item__text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, tota</div>
					</div>
				</div>
			</div>
			<div className="row categories-row d-flex justify-content-center">
				<div className="col-xxl-3 col-xl-4 col-lg-6 col-md-12 mt-4 p-0">
					<div className="categories__item">
						<img src="/image/page11_categories_dress.svg" className="categories__item__icon" />
						<div className="categories__item__category">Technology</div>
						<div className="categories__item__text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, tota</div>
					</div>
				</div>
				<div className="col-xxl-3 col-xl-4 col-lg-6 col-md-12 mt-4 p-0">
					<div className="categories__item">
						<img src="/image/page11_categories_bag.svg" className="categories__item__icon" />
						<div className="categories__item__category">Medical</div>
						<div className="categories__item__text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, tota</div>
					</div>
				</div>
				<div className="col-xxl-3 col-xl-4 col-lg-6 col-md-12 mt-4 p-0">
					<div className="categories__item">
						<img src="/image/page11_categories_education.svg" className="categories__item__icon" />
						<div className="categories__item__category">Education</div>
						<div className="categories__item__text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, tota</div>
					</div>
				</div>
				<div className="col-xxl-3 col-xl-4 col-lg-6 col-md-12 mt-4 p-0">
					<div className="categories__item">
						<img src="/image/page11_categories_camera.svg" className="categories__item__icon" />
						<div className="categories__item__category">Videos</div>
						<div className="categories__item__text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, tota</div>
					</div>
				</div>
			</div>
			<div className="row categories-row d-flex justify-content-center">
				<div className="col-xxl-3 col-xl-4 col-lg-6 col-md-12 mt-4 p-0">
					<div className="categories__item">
						<img src="/image/page11_categories_book.svg" className="categories__item__icon" />
						<div className="categories__item__category">Education</div>
						<div className="categories__item__text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, tota</div>
					</div>
				</div>
				<div className="col-xxl-3 col-xl-4 col-lg-6 col-md-12 mt-4 p-0">
					<div className="categories__item">
						<img src="/image/page11_categories_camera.svg" className="categories__item__icon" />
						<div className="categories__item__category">Videos</div>
						<div className="categories__item__text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, tota</div>
					</div>
				</div>
				<div className="col-xxl-3 col-xl-4 col-lg-6 col-md-12 mt-4 p-0">
					<div className="categories__item">
						<img src="/image/page11_categories_glasses.svg" className="categories__item__icon" />
						<div className="categories__item__category">Technology</div>
						<div className="categories__item__text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, tota</div>
					</div>
				</div>
				<div className="col-xxl-3 col-xl-4 col-lg-6 col-md-12 mt-4 p-0">
					<div className="categories__item">
						<img src="/image/page11_categories_bag.svg" className="categories__item__icon" />
						<div className="categories__item__category">Medical</div>
						<div className="categories__item__text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, tota</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Categories;