import Select from 'react-select'
import './index.css';
import OneNews from '../Items/OneNews';

const AkcelNews_page7 = (props) => {
    return (
        <section>
            <article>
                <div className="container-fluid text-white text-center akcel_news">
                    <div className='pt-4 akcel_news__title'>Akcel News</div>
                    <div className="mt-3 pb-5 aksel_news__text">Aut neque sed libero reiciendis repellendus laboriosam dolore omnis. Eligendi perspiciatis voluptate et est. Cumque aut aut et repellendus a delectus ipsum tempore excepturi. Distinctio dignissimos unde.</div>
                </div>
            </article>
            <article>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-6 col-lg-12 mt-5 d-flex'>
                            <input type='text' placeholder='Search Articles' min='5' max='50' className='color1 filters__left__input px-4' />
                        </div>
                        <div className='col-xl-6 col-lg-12 p-0 row'>
                            <div className="col-xl-8 col-lg-12 mt-5 d-flex filters__right-col">
                                <Select
                                    options={[
                                        { value: 'all', label: 'All Categories' },
                                        { value: 'technology', label: 'Technology' },
                                        { value: 'education', label: 'Education' },
                                        { value: 'videos', label: 'Videos' },
                                        { value: 'medical', label: 'Medical' },
                                    ]}
                                    defaultValue={{ value: 'all', label: 'All Categories' }}
                                    styles={{
                                        control: (baseStyles, state) => ({
                                            ...baseStyles,
                                            border: 'none',
                                            background: 'rgba(163, 163, 163, 0.15)',   
                                            width: '200px',   
                                            paddingLeft: '10px'                                
                                        }),
                                    }}
                                />
                            </div>
                            <div className="col-xl-4 col-lg-12 mt-5 p-0 d-flex filters__right-col">
                                <Select
                                    options={[
                                        { value: 'latest', label: 'Latest' },
                                        { value: 'newest', label: 'Newest' },
                                    ]}
                                    defaultValue={{ value: 'latest', label: 'Latest' }}
                                    styles={{
                                        control: (baseStyles, state) => ({
                                            ...baseStyles,
                                            border: 'none',
                                            background: 'rgba(163, 163, 163, 0.15)',
                                            width: '175px',   
                                            paddingLeft: '10px' 
                                        }),
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <article>
                <div>
                    <div className="container aksel_news-main">
                        <div className="row">
                            {props.news.map((news) => (
                                <OneNews news={news} />
                            ))}
                        </div>
                    </div>
                </div>
            </article>
            <div className='text-center'>
                <button className='mt-5 text-uppercase text-white filter_category__btnn'>load more</button>
            </div>
        </section>
    )
}

export default AkcelNews_page7;