import './index.css';
import OneProjectModed from '../Items/OneProjectModed/OneProjectModed';

const Page5Projects = (props) => {  
    return (
		<div className="container mt-5">
			<div className="row">
				<h2 className="col-lg-6 col-md-12 px-4 we-have-title title-title">We have done many crowdfunding projects</h2>
				<div className="col-lg-6 col-md-12 d-flex align-items-center title">
					<button className="view-more">
						<div className="d-flex justify-content-between px-3">
							<div className="text-success">View More</div>
							<img src="/image/page5_project_arrow.svg" />
						</div>
					</button>
				</div>
			</div>
			<div className="row">
                {props.projects.map((project) => (
                    <OneProjectModed project={project} />
                )) }
			</div>
		</div>
	)
}

export default Page5Projects;