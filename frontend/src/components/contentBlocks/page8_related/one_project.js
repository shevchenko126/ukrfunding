const OneProject = ({ project }) => {
    return (
        <div className="col mt-5 d-flex justify-content-center p-0">
            <div className='related__item'>
                <div className="related__item__logo">
                    <img src="../image/page_1_news_profile.svg" style={{ width: '100%' }} />
                    <div className="text-uppercase related__item__logo__category">{project.category}</div>
                </div>
                <a href='' className='related__item__href'>
                    <div className="related__item__title">{project.title}</div>
                </a>
                <div className="related__item__description">{project.description}</div>
                <div className="mb-5 related__item__author row d-flex">
                    <div className='col-lg-2 col-sm-12 p-0'>
                        <img src="../image/page_1_news_author-profile.svg" />
                    </div>
                    <div className="col-lg-10 col-sm-12 related__item__author__author">
                        <div className="related__item__author__author__name">{project.author}</div>
                        <div className="d-flex" style={{ marginTop: '15px' }}>
                            <div className="related__item__author__author__time-date">{project.time_read}</div>
                            <img src="../image/page_1_news_dot.svg" style={{ marginLeft: '20px', marginRight: '20px' }} />
                            <div className="related__item__author__author__time-date">{project.date}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OneProject;