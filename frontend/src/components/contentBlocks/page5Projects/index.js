import './index.css';
import OneProject from './OneProject'; 

const Page5Projects = () => {
	
    const projects = [
        {
            title: 'Mirror One | Your life at a glance',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
            author: 'Gustavo Mango',
            /* rate: '' */
            campaign: '12 Campaign',
            place: 'New York, London',
            /* progress: '' */
            raised: 'Total Raised $ 5,345',
            days_left: '45 Days left',
        },
        {
            title: 'Mirror One | Your life at a glance',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
            author: 'Roger Bergson',
            /* rate: '' */
            campaign: '12 Campaign',
            place: 'New York, London',
            /* progress: '' */
            raised: 'Total Raised $ 5,345',
            days_left: '45 Days left',
        },
        {
            title: 'Mirror One | Your life at a glance',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
            author: 'James Westervelt',
            /* rate: '' */
            campaign: '12 Campaign',
            place: 'New York, London',
            /* progress: '' */
            raised: 'Total Raised $ 5,345',
            days_left: '45 Days left',
        }
    ]
    
    return (
		<div className="container mt-5 we_have_done">
			<div className="row">
				<div className="col-lg-6 col-md-12 px-4 we_have_done__title">We have done many crowdfunding projects</div>
				<div className="col-lg-6 col-md-12 d-flex align-items-center" id='button-col'>
					<button className="we_have_done__view-more">
						<div className="d-flex justify-content-between px-3">
							<div className="text-success we_have_done__view-more__text">View More</div>
							<img src="../image/page5_project_arrow.svg" />
						</div>
					</button>
				</div>
			</div>
			<div className="row">
                {projects.map((project) => (
                    <OneProject project={project} />
                )) }
			</div>
		</div>
	)
}

export default Page5Projects;