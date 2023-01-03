import './index.css';
import OneProject from '../Items/OneProject';

const Page3Projects = (props) => {

    return (
        <div className="container recent_projects">
            <div className="row mt-5 mb-5">
                {props.projects.map((project) => (
                    <OneProject project={project} />
                ))}
            </div>
            <div className='d-flex justify-content-center'>
                <button className='text-uppercase button-bg-pink-text-white'>load more</button>
            </div>
        </div>
    );
};

export default Page3Projects;