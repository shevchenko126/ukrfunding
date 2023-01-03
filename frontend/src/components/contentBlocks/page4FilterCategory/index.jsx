import './index.css';

const FilterCategory = () => {
	return (
		<div className="container filter p-0">
			<h3 className='filter-title'>Filter</h3>
			<div className="filter-categories">
				<h4 className="filter-category-title">Category</h4>
				<div className="d-flex filter-item">
					<input type="checkbox" className="filter-checkbox" />
					<h5 className="filter-category">All Projects</h5>
				</div>
				<hr className='filter-line' />
				<div className="d-flex filter-item">
					<input type="checkbox" className="filter-checkbox" />
					<h5 className="filter-category">Technology</h5>
				</div>
				<hr className='filter-line' />
				<div className="d-flex filter-item">
					<input type="checkbox" className="filter-checkbox" />
					<h5 className="filter-category">Medical</h5>
				</div>
				<hr className='filter-line' />
				<div className="d-flex filter-item">
					<input type="checkbox" className="filter-checkbox" />
					<h5 className="filter-category">Business</h5>
				</div>
				<hr className='filter-line' />
				<div className="d-flex filter-item">
					<input type="checkbox" className="filter-checkbox" />
					<h5 className="filter-category">Fashion</h5>
				</div>
				<hr className='filter-line' />
				<label className="filter-see-more">See More Categories
					<select></select>
				</label>
				<hr className='filter-line' />
				<button className='filter-category-btn'>SEARCH PROJECTS</button>
			</div>
		</div>
	);
};

export default FilterCategory;