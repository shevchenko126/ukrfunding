const OneProject = ({ project }) => {
    return (
        <div className="col-lg-4 col-md-12 mt-5">
            <div className="we_have_done__item px-4">
                <img src="../image/page5_project_background.svg" className="mt-4 img-fluid" />
                <div className="mt-4 we_have_done__item__theme">{project.title}</div>
                <div className="mt-4 we_have_done__item__text">{project.description}</div>
                <div className="row mt-4 we_have_done__item__author">
                    <div className="col-lg-2 col-md-12">
                        <img src="../image/page5_project_author.svg" />
                    </div>
                    <div className="col-lg-10 col-md-12">
                        <div className="mx-2">
                            <div className="d-flex">
                                <div className="we_have_done__item__author__author">{project.author}</div>
                                <img src="../image/page5_project_star.svg" style={{ marginLeft: '10px' }} />
                                <img src="../image/page5_project_star.svg" className="px-2" />
                                <img src="../image/page5_project_star.svg" />
                            </div>
                            <div className="d-flex mt-2">
                                <div className="text-success we_have_done__item__author__campaign">{project.campaign}</div>
                                <img src="../image/page5_project_dot.svg" className="mx-3" />
                                <div className="we_have_done__item__author__location">{project.place}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4 progress">
                    <div className="progress-bar" style={{ width: '47%' }}></div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12 mt-4">
                        <img src="../image/page5_project_coins.svg" />
                        <span className="we_have_done__item__raised-days">{project.raised}</span>
                    </div>
                    <div className="col-lg-6 col-md-12 mt-4">
                        <img src="../image/page5_project_calendar.svg" />
                        <span className="we_have_done__item__raised-days">{project.days_left}</span>
                    </div>
                </div>
                <button className="mt-5 we_have_done__item__heart">
                    <img src="../image/page5_project_heart.svg" />
                </button>
                <button className="mt-5 mb-4 text-white we_have_done__item__fund">Fund This Project</button>
            </div>
        </div>
    )
}

export default OneProject;