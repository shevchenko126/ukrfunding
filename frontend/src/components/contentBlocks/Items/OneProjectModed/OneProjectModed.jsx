import './index.css';
import { Link } from 'react-router-dom';

const OneProjectModed = ({ project }) => {
    return (
        <div className="col-lg-4 col-md-12 mt-5">
            <div className="item px-4" style={{ maxWidth: '500px' }}>
                <img src="/image/page5_project_background.svg" className="mt-4 img-fluid" />
                <h4 className="mt-4">
                    <Link className='project-title' to={'/projects/' + project.slug}>{project.title}</Link></h4>
                <p className="mt-4">{project.description}</p>
                <div className="d-flex mt-4">
                    <img src="/image/page5_project_author.svg" />
                    <div className='mx-4'>
                        <div className='author-name'>{project.author}</div>
                        <div className="author-city mt-1">{project.place}</div>
                    </div>
                </div>
                <div className="mt-4 progress" style={{ width: '100%' }}>
                    <div className="progress-bar" style={{ width: project.progress + '%' }}></div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12 mt-4">
                        <img src="/image/page5_project_coins.svg" />
                        <span style={{ marginLeft: '10px' }}>Total raised $ {project.raised}</span>
                    </div>
                    <div className="col-lg-6 col-md-12 mt-4">
                        <img src="/image/page5_project_calendar.svg" />
                        <span style={{ marginLeft: '10px' }}>Days left {project.daysLeft}</span>
                    </div>
                </div>
                <div className='d-flex gap-3 justify-content-between'>
                    <button className="mt-5 btn-heart">
                        <img src="/image/page5_project_heart.svg" />
                    </button>
                    <button className="mt-5 mb-4 text-white btn-fund">Fund This Project</button>
                </div>
            </div>
        </div>
    )
}

export default OneProjectModed;