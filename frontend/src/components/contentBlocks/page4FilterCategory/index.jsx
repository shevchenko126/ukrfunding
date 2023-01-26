import './index.css';

const FilterCategory = (props) => {
	return (
		<div className="container filter p-0">
			<h3 className='filter-title'>Filter</h3>
			<div className="filter-categories">
				<h4 className="filter-category-title">Category</h4>
				<hr className='filter-line' />
				<div className="d-flex filter-item">
					<input type="checkbox" className="filter-checkbox" checked={props.technologyChecked} onChange={props.setTechnologyCheckbox} />
					<h5 className="filter-category">Technology</h5>
				</div>
				<hr className='filter-line' />
				<div className="d-flex filter-item">
					<input type="checkbox" className="filter-checkbox" checked={props.medicalChecked} onChange={props.setMedicalCheckbox} />
					<h5 className="filter-category">Medical</h5>
				</div>
				<hr className='filter-line' />
				<div className="d-flex filter-item">
					<input type="checkbox" className="filter-checkbox" checked={props.businessChecked} onChange={props.setBusinessCheckbox} />
					<h5 className="filter-category">Business</h5>
				</div>
				<hr className='filter-line' />
				<div className="d-flex filter-item">
					<input type="checkbox" className="filter-checkbox" checked={props.fasionChecked} onChange={props.setFashionCheckbox} />
					<h5 className="filter-category">Fashion</h5>
				</div>
				<hr className='filter-line' />
				<button className='filter-category-btn' onClick={props.onClick}>SEARCH PROJECTS</button>
			</div>
		</div>
	);
};

export default FilterCategory;