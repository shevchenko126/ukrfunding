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
                    <p className="mx-3 my-0">{project.raised}</p>
                </div>
                <div className="d-flex align-items-center m-3 mt-4">
                    <img alt="" src="/image/page1_recent_projects_calendar.svg" />
                    <p className="mx-3 my-0">{project.daysLeft}</p>
                </div>
                <div className="pb-4">
                    <div className="row d-flex">
                        <div className='col-lg-2 col-sm-12 mt-4'>
                            <img alt="" src="/image/page1_recent_projects_icon.svg" className="mx-3" />
                        </div>
                        <div className='col-lg-10 col-sm-12 mt-4'>
                            <div className="d-flex">
                                <h5 className="mx-4">{project.author}</h5>
                                <img alt="" src="/image/page1_recent_projects_star.svg" className="mx-1" />
                                <img alt="" src="/image/page1_recent_projects_star.svg" className="mx-1" />
                                <img alt="" src="/image/page1_recent_projects_star.svg" className="mx-1" />
                            </div>
                            <div className="d-flex mx-4 mt-3">
                                <div className="text-success author-campaign">{project.campaign}</div>
                                <img alt="" src="/image/page1_recent_projects_dot.svg" className="mx-3" />
                                <div className="author-city">{project.location}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OneProject;