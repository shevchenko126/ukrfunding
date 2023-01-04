import { Link } from 'react-router-dom';
import './index.css';

const OneNews = ({ news }) => {
    return (
        <article className="col-xxl-4 mt-5 d-flex justify-content-center">
            <div className='item'>
                <div className="aksel_news-main__logo">
                    <img alt="#" src="../image/page_1_news_profile.svg" style={{ width: '100%' }} />
                    <div className="text-uppercase news-category">{news.category}</div>
                </div>
                <Link to={'/news-details/' + news.slug} className='item-title'>
                    <h4 className="aksel_news-main__title">{news.title}</h4>
                </Link>
                <p className="aksel_news-main__text">{news.description}</p>
                <div className="mb-5 aksel_news-main__author row d-flex">
                    <div className='col-lg-2 col-sm-12 p-0'>
                        <img alt="#" src="../image/page_1_news_author-profile.svg" />
                    </div>
                    <div className="col-lg-10 col-sm-12">
                        <h5 className='author-name'>{news.author}</h5>
                        <div className="d-flex" style={{ marginTop: '15px' }}>
                            <p>{news.timeRead}</p>
                            <img alt="#" src="../image/page_1_news_dot.svg" style={{ marginLeft: '6px', marginRight: '6px' }} />
                            <p>{news.date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default OneNews;