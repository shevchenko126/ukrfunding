import './index.css';

const OneProjectModed = ({ project }) => {
    return (
        <div className="col-lg-4 col-md-12 mt-5">
            <div className="item px-4">
                <img src="/image/page5_project_background.svg" className="mt-4 img-fluid" />
                <h4 className="mt-4">{project.title}</h4>
                <p className="mt-4">{project.description}</p>
                <div className="row mt-4">
                    <div className="col-lg-2 col-md-12">
                        <img src="/image/page5_project_author.svg" />
                    </div>
                    <div className="col-lg-10 col-md-12">
                        <div className="mx-2">
                            <div className="d-flex">
                                <div className='author-name'>{project.author}</div>
                                <img src="/image/page5_project_star.svg" style={{ marginLeft: '10px' }} />
                                <img src="/image/page5_project_star.svg" className="px-2" />
                                <img src="/image/page5_project_star.svg" />
                            </div>
                            <div className="d-flex mt-2">
                                <div className="text-success author-campaign">{project.campaign}</div>
                                <img src="/image/page5_project_dot.svg" className="mx-3" />
                                <div className="author-city">{project.place}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4 progress">
                    <div className="progress-bar" style={{ width: project.progress + '%' }}></div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12 mt-4">
                        <img src="/image/page5_project_coins.svg" />
                        <span style={{ marginLeft: '10px' }}>{project.raised}</span>
                    </div>
                    <div className="col-lg-6 col-md-12 mt-4">
                        <img src="/image/page5_project_calendar.svg" />
                        <span style={{ marginLeft: '10px' }}>{project.daysLeft}</span>
                    </div>
                </div>
                <div className='d-flex justify-content-between'>
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