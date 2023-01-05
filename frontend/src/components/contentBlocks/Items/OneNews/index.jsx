import { Link } from 'react-router-dom';
import './index.css';

const OneNews = ({ news }) => {
    return (
        <article className="col-xl-4 col-md-6 col-sm-12 mx-auto mt-5 d-flex justify-content-center">
            <div className='item' style={{ maxWidth: '500px' }}>
                <div className="aksel_news-main__logo">
                    <img alt="#" src="/image/page_1_news_profile.svg" style={{ width: '100%' }} />
                    <div className="text-uppercase news-category">{news.category}</div>
                </div>
                <div className="aksel-news-main">
                    <Link to={'/news-details/' + news.slug} className='item-title'>
                        <h4 className="e">{news.title}</h4>
                    </Link>
                    <p className="mt-2">{news.description}</p>
                    <div className="d-flex mt-3">
                        <div className='p-0'>
                            <img alt="#" src="/image/page_1_news_author-profile.svg" />
                        </div>
                        <div className='mx-3'>
                            <h5 className='author-name'>{news.author}</h5>
                            <p>{news.date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default OneNews;