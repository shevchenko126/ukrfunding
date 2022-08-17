const OneProject = ({ project }) => {
    return (
        <div className="col-xl-3 col-md-6">
            <div className="mt-5 recent_projects__item">
                <div className="recent_projects__item__image"></div>
                <div className="m-3 text-uppercase recent_projects__item__category">{project.category}</div>
                <div className="m-3">
                    <a href='' className='recent_projects__item__title'>{project.title}</a>
                </div>
                <div className="m-3 progress">
                    <div className="progress-bar" style={{ width: project.progress }}></div>
                </div>
                <div className="d-flex m-3 mt-4">
                    <img src="../image/page1_recent_projects_coins.svg" />
                    <div className="mx-3 recent_projects__item__text">{project.raised}</div>
                </div>
                <div className="d-flex m-3 mt-4">
                    <img src="../image/page1_recent_projects_calendar.svg" />
                    <div className="mx-3 recent_projects__item__text">{project.days_left}</div>
                </div>
                <div className="recent_projects__item__author pb-4">
                    <div className="row d-flex">
                        <div className='col-lg-2 col-sm-12 mt-4'>
                            <img src="../image/page1_recent_projects_icon.svg" className="mx-3" />
                        </div>
                        <div className='col-lg-10 col-sm-12 mt-4'>
                            <div className="d-flex">
                                <div className="mx-4 recent_projects__item__author__author">{project.author}</div>
                                <img src="../image/page1_recent_projects_star.svg" className="mx-1" />
                                <img src="../image/page1_recent_projects_star.svg" className="mx-1" />
                                <img src="../image/page1_recent_projects_star.svg" className="mx-1" />
                            </div>
                            <div className="d-flex mx-4 mt-3">
                                <div className="recent_projects__item__author__campaign">{project.campaign}</div>
                                <img src="../image/page1_recent_projects_dot.svg" className="mx-3" />
                                <div className="recent_projects__item__author__city">{project.location}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OneProject;