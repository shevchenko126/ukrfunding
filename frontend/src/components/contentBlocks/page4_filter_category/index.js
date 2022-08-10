import './index.css';

const FilterCategory = () => {
	return (
		<div className="container filter p-0">
			<div className="filter__title">Filter</div>
			<div className="filter__categories">
				<div className="filter__categories__title">Category</div>
				<div className="d-flex filter__categories__str">
					<input type="checkbox" className="filter__categories__checkbox" />
					<div className="filter__categories__categories">All Projects</div>
				</div>
				<hr className='filter__line' />
				<div className="d-flex filter__categories__str">
					<input type="checkbox" className="filter__categories__checkbox" />
					<div className="filter__categories__categories">Technology</div>
				</div>
				<hr className='filter__line'/>
				<div className="d-flex filter__categories__str">
					<input type="checkbox" className="filter__categories__checkbox" />
					<div className="filter__categories__categories">Medical</div>
				</div>
				<hr className='filter__line' />
				<div className="d-flex filter__categories__str">
					<input type="checkbox" className="filter__categories__checkbox" />
					<div className="filter__categories__categories">Business</div>
				</div>
				<hr className='filter__line' />
				<div className="d-flex filter__categories__str">
					<input type="checkbox" className="filter__categories__checkbox" />
					<div className="filter__categories__categories">Fashion</div>
				</div>
				<hr className='filter__line' />
				<label className="filter__categories__see-more">See More Categories</label>
				<img src='../image/header_down_arrow.svg' className='mx-3' />
				<hr />
				<button className='filter__categories__btn'>SEARCH PROJECTS</button>
			</div>
		</div>
	)
}

export default FilterCategory;