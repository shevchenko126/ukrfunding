import './index.css';
import OneProject from './OneProject';

const AkcelNews_page7 = () => {

    const projects = [
        {
            category: 'health',
            title: 'New vaccine for cattle protects against fetal calf loss from EBA – anatomy of..',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            author: 'Hawkins Junior',
            time_read: '24min read',
            date: 'November 21th, 2020',
        },
        {
            category: 'business',
            title: '4 Things parents learned for they jids in 2020',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            author: 'Hawkins Junior',
            time_read: '24min read',
            date: 'November 21th, 2020',
        },
        {
            category: 'design',
            title: 'He Created the Web. Now He’s Out to Remake the Digital World.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            author: 'Melinda Humbles',
            time_read: '24min read',
            date: 'November 21th, 2020',
        },
        {
            category: 'health',
            title: 'New vaccine for cattle protects against fetal calf loss from EBA – anatomy of..',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            author: 'Hawkins Junior',
            time_read: '24min read',
            date: 'November 21th, 2020',
        },
        {
            category: 'business',
            title: '4 Things parents learned for they jids in 2020',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            author: 'Hawkins Junior',
            time_read: '24min read',
            date: 'November 21th, 2020',
        },
        {
            category: 'design',
            title: 'He Created the Web. Now He’s Out to Remake the Digital World.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            author: 'Melinda Humbles',
            time_read: '24min read',
            date: 'November 21th, 2020',
        },
        {
            category: 'health',
            title: 'New vaccine for cattle protects against fetal calf loss from EBA – anatomy of..',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            author: 'Hawkins Junior',
            time_read: '24min read',
            date: 'November 21th, 2020',
        },
        {
            category: 'business',
            title: '4 Things parents learned for they jids in 2020',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            author: 'Hawkins Junior',
            time_read: '24min read',
            date: 'November 21th, 2020',
        },
        {
            category: 'design',
            title: 'He Created the Web. Now He’s Out to Remake the Digital World.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            author: 'Melinda Humbles',
            time_read: '24min read',
            date: 'November 21th, 2020',
        },
    ]

    return (
        <section>
            <article>
                <div className="container-fluid text-white text-center akcel_news">
                    <div className='pt-4 akcel_news__title'>Akcel News</div>
                    <div className="mt-3 pb-5 aksel_news__text">Aut neque sed libero reiciendis repellendus laboriosam dolore omnis. Eligendi perspiciatis voluptate et est. Cumque aut aut et repellendus a delectus ipsum tempore excepturi. Distinctio dignissimos unde.</div>
                </div>
            </article>
            <article>
                <div className='container filters'>
                    <div className='row filters__left'>
                        <div className='col-xl-6 col-lg-12 mt-5 d-flex filters__left-input'>
                            <input type='text' placeholder='Search Articles' min='5' max='50' className='color1 filters__left__input px-4' />
                        </div>
                        <div className='col-xl-6 col-lg-12 p-0 row filters__right'>
                            <div className="col-xl-5 col-lg-12 mt-5 d-flex filters__right-col">
                                <div className='d-flex px-3 align-items-center filters__right__categories'>
                                    <div className='color1 filters__right__categories__text'>All Categories</div>
                                    <select className='filters__right__categories__select'>
                                        <img src='../image/header_down_arrow.svg' />
                                        {/* <option>hello world</option> */}
                                    </select>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-12 mt-5 d-flex filters__right-col">
                                <div className='d-flex px-4 justify-content-between align-items-center filters__right__date'>
                                    <img src='../image/page7_calendar.svg' />
                                    <div className='color1'>Filter Date</div>
                                    <select className='filters__right__categories__select date'>
                                        <img src='../image/header_down_arrow.svg' />
                                        {/* <option>hello world</option> */}
                                    </select>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-12 mt-5 p-0 d-flex filters__right-col">
                                <div className='d-flex justify-content-between px-4 align-items-center filters__right__time'>
                                    <div className='color1'>Latest</div>
                                    <select className='filters__right__categories__select date'>
                                        <img src='../image/header_down_arrow.svg' />
                                        {/* <option>hello world</option> */}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <article>
                <div>
                    <div className="container aksel_news-main">
                        <div className="row">
                            {projects.map((project) => (
                                <OneProject project={project} />
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