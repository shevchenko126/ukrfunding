import './index.css';
import OneProject from '../Items/OneProject';

const RecentProjects = (props) => {

    return (
        <div className="container" style={{ marginTop: '100px' }}>
            <div className='text-center mx-auto recent_projects-text'>
                <h2>Recent Projects</h2>
                <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
            </div>
            <div className="row my-5">
                {props.projects.map((project) => (
                    <OneProject col='3' project={project} />
                ))}
            </div>
        </div>
    )
}

export default RecentProjects;