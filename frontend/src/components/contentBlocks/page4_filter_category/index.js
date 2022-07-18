import '/index.css';

const FilterCategory = () => {
	return (
		<div class="container filter p-0">
			<div class="filter__title">Filter</div>
			<div class="filter__categories">
				<div class="filter__categories__title">Category</div>
				<div class="d-flex filter__categories__str">
					<input type="checkbox" class="filter__categories__checkbox" />
					<div class="filter__categories__categories">All Projects</div>
				</div>
				<hr />
				<div class="d-flex filter__categories__str">
					<input type="checkbox" class="filter__categories__checkbox" />
					<div class="filter__categories__categories">Technology</div>
				</div>
				<hr />
				<div class="d-flex filter__categories__str">
					<input type="checkbox" class="filter__categories__checkbox" />
					<div class="filter__categories__categories">Medical</div>
				</div>
				<hr />
				<div class="d-flex filter__categories__str">
					<input type="checkbox" class="filter__categories__checkbox" />
					<div class="filter__categories__categories">Business</div>
				</div>
				<hr />
				<div class="d-flex filter__categories__str">
					<input type="checkbox" class="filter__categories__checkbox" />
					<div class="filter__categories__categories">Fashion</div>
				</div>
				<hr />
				<label class="filter__categories__see-more">See More Categories</label>
				<select class="filter__categories__select">
					<option></option>
				</select>
				<hr />
					<button>SEARCH PROJECTS</button>
			</div>
		</div>
	)
	export default;
}