const OneProject = ({ project }) => {
    return (
        <div className="col mt-5 d-flex justify-content-center p-0">
            <div className='aksel_news-main-item'>
                <div className="aksel_news-main__logo">
                    <img src="../image/page_1_news_profile.svg" style={{ width: '100%' }} />
                    <div className="text-uppercase aksel_news-main__category">{project.category}</div>
                </div>
                <a href='' className='aksel_news-main-item-href'>
                    <div className="aksel_news-main__title">{project.title}</div>
                </a>
                <div className="aksel_news-main__text">{project.description}</div>
                <div className="mb-5 aksel_news-main__author row d-flex">
                    <div className='col-lg-2 col-sm-12 p-0'>
                        <img src="../image/page_1_news_author-profile.svg" />
                    </div>
                    <div className="col-lg-10 col-sm-12 aksel_news-main__author__author">
                        <div className="aksel_news-main__author__author__name">{project.author}</div>
                        <div className="d-flex" style={{ marginTop: '15px' }}>
                            <div className="aksel_news-main__author__time-date">{project.time_read}</div>
                            <img src="../image/page_1_news_dot.svg" style={{ marginLeft: '6px', marginRight: '6px' }} />
                            <div className="aksel_news-main__author__time-date">{project.date}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OneProject;