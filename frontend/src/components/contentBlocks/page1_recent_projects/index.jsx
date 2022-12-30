import './index.css';

const RecentProjects = () => {

    const projects = [
        {
            category: 'medical',
            title: 'Beautiful color for designers & students',
            progress: '45%',
            raised: 'Total Raised $ 5,345',
            days_left: '45 Days left',
            author: 'Cheyenne Curtis',
            campaign: '12 Campaign',
            location: 'New York, London',
        },
        {
            category: 'design',
            title: 'Notebook for your creative observation',
            progress: '30%',
            raised: 'Total Raised $ 5,345',
            days_left: '45 Days left',
            author: 'Ahmad Schleifer',
            campaign: '12 Campaign',
            location: 'New York, London',
        },
        {
            category: 'technnology',
            title: 'VR Ears | Hear Off-World Listen Off-Ear',
            progress: '90%',
            raised: 'Total Raised $ 5,345',
            days_left: '45 Days left',
            author: 'Skylar Gouse',
            campaign: '12 Campaign',
            location: 'New York, London',
        },
        {
            category: 'technnology',
            title: 'Self Driving Robot for Target Shooting Game',
            progress: '7%',
            raised: 'Total Raised $ 5,345',
            days_left: '45 Days left',
            author: 'Maren George',
            campaign: '12 Campaign',
            location: 'New York, London',
        },
    ]

    return (
        <div className="container recent_projects" style={{ marginTop: '100px' }}>
            <div className='text-center mx-auto recent_projects-text'>
                <h2>Recent Projects</h2>
                <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
            </div>
            <div className="row my-5">
                {projects.map((project) => (
                    <div className="col-xl-3 col-md-6">
                        <div className="mt-5 item" style={{ maxWidth: '380px' }}>
                            <div className="recent_projects__item__image"></div>
                            <div className="m-3 text-uppercase text-success recent_projects__item__category">{project.category}</div>
                            <div className="m-3">
                                <a href='#' className="recent_projects__item__theme">{project.title}</a>
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
                                            <div className="text-success recent_projects__item__author__campaign">{project.campaign}</div>
                                            <img src="../image/page1_recent_projects_dot.svg" className="mx-3" />
                                            <div className="recent_projects__item__author__city">{project.location}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecentProjects;