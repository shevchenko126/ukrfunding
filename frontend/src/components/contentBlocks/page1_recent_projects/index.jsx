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
                            <div className="m-3 text-success item-category">{project.category}</div>
                            <h4 className="m-3">
                                <a href='/' className="item-title">{project.title}</a>
                            </h4>
                            <div className="m-3 progress">
                                <div className="progress-bar" style={{ width: project.progress }}></div>
                            </div>
                            <div className="d-flex m-3 mt-4">
                                <img alt="" src="../image/page1_recent_projects_coins.svg" />
                                <p className="mx-3 my-0">{project.raised}</p>
                            </div>
                            <div className="d-flex align-items-center m-3 mt-4">
                                <img alt="" src="../image/page1_recent_projects_calendar.svg" />
                                <p className="mx-3 my-0">{project.days_left}</p>
                            </div>
                            <div className="pb-4">
                                <div className="row d-flex">
                                    <div className='col-lg-2 col-sm-12 mt-4'>
                                        <img alt="" src="../image/page1_recent_projects_icon.svg" className="mx-3" />
                                    </div>
                                    <div className='col-lg-10 col-sm-12 mt-4'>
                                        <div className="d-flex">
                                            <h5 className="mx-4">{project.author}</h5>
                                            <img alt="" src="../image/page1_recent_projects_star.svg" className="mx-1" />
                                            <img alt="" src="../image/page1_recent_projects_star.svg" className="mx-1" />
                                            <img alt="" src="../image/page1_recent_projects_star.svg" className="mx-1" />
                                        </div>
                                        <div className="d-flex mx-4 mt-3">
                                            <div className="text-success author-campaign">{project.campaign}</div>
                                            <img alt="" src="../image/page1_recent_projects_dot.svg" className="mx-3" />
                                            <div className="author-city">{project.location}</div>
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