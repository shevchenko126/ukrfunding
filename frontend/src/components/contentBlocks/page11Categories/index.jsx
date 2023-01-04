import './index.css';

const Categories = () => {

	const categories = [
		{
			img: '/image/page11_categories_glasses.svg',
			name: 'Technology',
			description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, tota'
		},
		{
			img: '/image/page11_categories_book.svg',
			name: 'Education',
			description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, tota',
		},
		{
			img: '/image/page11_categories_camera.svg',
			name: 'Videos',
			description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, tota',
		},
		{
			img: '/image/page11_categories_bag.svg',
			name: 'Medical',
			description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, tota',
		},
		{
			img: '/image/page11_categories_glasses.svg',
			name: 'Technology',
			description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, tota'
		},
		{
			img: '/image/page11_categories_book.svg',
			name: 'Education',
			description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, tota',
		},
		{
			img: '/image/page11_categories_camera.svg',
			name: 'Videos',
			description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, tota',
		},
		{
			img: '/image/page11_categories_bag.svg',
			name: 'Medical',
			description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, tota',
		},
		{
			img: '/image/page11_categories_glasses.svg',
			name: 'Technology',
			description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, tota'
		},
		{
			img: '/image/page11_categories_book.svg',
			name: 'Education',
			description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, tota',
		},
		{
			img: '/image/page11_categories_camera.svg',
			name: 'Videos',
			description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, tota',
		},
		{
			img: '/image/page11_categories_bag.svg',
			name: 'Medical',
			description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, tota',
		},
	];

	return (
		<div className="container mt-5 pt-5">
			<div className='text-center mx-auto'>
				<h4 className="text-uppercase text-success">categories</h4>
				<h2 className="mt-3">Explore Our Crowdfunding Categories</h2>
			</div>
			<div className='d-flex justify-content-center mb-5'>
				<input type='text' max='35' placeholder='Find Categories' className='px-4 mt-5 categories-input' />
			</div>
			<section className="row categories-row d-flex justify-content-between">
				{categories.map((category) => (
					<article className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-4 p-0">
						<div className="item category-item p-5">
							<img src={category.img} className='category-img' />
							<h5 className="mt-3">{category.name}</h5>
							<p className="mt-4">{category.description}</p>
						</div>
					</article>
				))}
			</section>
		</div>
	)
}

export default Categories;