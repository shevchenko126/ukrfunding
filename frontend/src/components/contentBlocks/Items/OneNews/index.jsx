const OneNews = ({ news }) => {
    return (
        <div className="col mt-5 d-flex justify-content-center p-0">
            <div className='aksel_news-main-item'>
                <div className="aksel_news-main__logo">
                    <img alt="#" src="../image/page_1_news_profile.svg" style={{ width: '100%' }} />
                    <div className="text-uppercase aksel_news-main__category">{news.category}</div>
                </div>
                <a href='#a' className='aksel_news-main-item-href'>
                    <div className="aksel_news-main__title">{news.title}</div>
                </a>
                <div className="aksel_news-main__text">{news.description}</div>
                <div className="mb-5 aksel_news-main__author row d-flex">
                    <div className='col-lg-2 col-sm-12 p-0'>
                        <img alt="#" src="../image/page_1_news_author-profile.svg" />
                    </div>
                    <div className="col-lg-10 col-sm-12 aksel_news-main__author__author">
                        <div className="aksel_news-main__author__author__name">{news.author}</div>
                        <div className="d-flex" style={{ marginTop: '15px' }}>
                            <div className="aksel_news-main__author__time-date">{news.time_read}</div>
                            <img alt="#" src="../image/page_1_news_dot.svg" style={{ marginLeft: '6px', marginRight: '6px' }} />
                            <div className="aksel_news-main__author__time-date">{news.date}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OneNews;