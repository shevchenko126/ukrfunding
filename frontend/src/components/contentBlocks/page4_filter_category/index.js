import '/index.css';

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
				<hr />
				<div className="d-flex filter__categories__str">
					<input type="checkbox" className="filter__categories__checkbox" />
					<div className="filter__categories__categories">Technology</div>
				</div>
				<hr />
				<div className="d-flex filter__categories__str">
					<input type="checkbox" className="filter__categories__checkbox" />
					<div className="filter__categories__categories">Medical</div>
				</div>
				<hr />
				<div className="d-flex filter__categories__str">
					<input type="checkbox" className="filter__categories__checkbox" />
					<div className="filter__categories__categories">Business</div>
				</div>
				<hr />
				<div className="d-flex filter__categories__str">
					<input type="checkbox" className="filter__categories__checkbox" />
					<div className="filter__categories__categories">Fashion</div>
				</div>
				<hr />
				<label className="filter__categories__see-more">See More Categories</label>
				<select className="filter__categories__select">
					<option></option>
				</select>
				<hr />
					<button>SEARCH PROJECTS</button>
			</div>
		</div>
	)
}

export default FilterCategory;