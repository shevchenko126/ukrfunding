import { useState, useEffect } from 'react';
import './index.css';

const Categories = () => {

	const categoriesAll = [
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

	const [categories, setCategories] = useState(categoriesAll);
	const [inputValue, setInputValue] = useState('');

	useEffect(() => {
		let data = categoriesAll;
		if (inputValue) {
			data = data.filter((category) => category.name.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase()));
		}
		setCategories(data);
	}, [inputValue]);

	return (
		<div className="container my-5 py-5">
			<div className='text-center mx-auto'>
				<h4 className="text-uppercase text-success">categories</h4>
				<h2 className="mt-3 categoriess-title">Explore Our Crowdfunding Categories</h2>
			</div>
			<div className='d-flex justify-content-center mb-5'>
				<input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Find Categories' className='px-4 mt-5 categories-input' />
			</div>
			<section className="row categories-row d-flex justify-content-between">
				{categories.length ? categories.map((category) => (
					<article className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-4">
						<div className="item category-item p-5">
							<img src={category.img} className='category-img' />
							<h5 className="mt-3">{category.name}</h5>
							<p className="mt-4">{category.description}</p>
						</div>
					</article>
				)) : (
					<h4 className='text-center'>Noting found...</h4>
				)}
			</section>
		</div>
	)
}

export default Categories;