import { Link } from 'react-router-dom';
import './index.css';

const OneProject = ({ project, col }) => {
    return (
        <div className={`col-xl-${col} col-md-6`}>
            <div className="mt-5 item" style={{ maxWidth: '380px' }}>
                <div className="project-img"></div>
                <div className="m-3 text-success item-category">{project.category}</div>
                <h4 className="m-3">
                    <Link to={'/project-details/' + project.slug} className="item-title">{project.title}</Link>
                </h4>
                <div className="m-3 progress">
                    <div className="progress-bar" style={{ width: project.progress }}></div>
                </div>
                <div className="d-flex m-3 mt-4">
                    <img alt="" src="/image/page1_recent_projects_coins.svg" />
                    <p className="mx-3 my-0">Total raised $ {project.raised}</p>
                </div>
                <div className="d-flex align-items-center m-3 mt-4">
                    <img alt="" src="/image/page1_recent_projects_calendar.svg" />
                    <p className="mx-3 my-0">Days left {project.daysLeft}</p>
                </div>
                <div className="pb-4">
                    <div className="d-flex">
                        <div className=' mt-4'>
                            <img alt="" src="/image/page1_recent_projects_icon.svg" className="mx-3" />
                        </div>
                        <div className='mt-4 mx-1'>
                            <h5 className="">{project.author}</h5>
                            <div className="author-city">{project.location}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OneProject;