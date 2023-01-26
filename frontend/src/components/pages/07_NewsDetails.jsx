import Header from '../Header';
import NewsDetailsBlock from '../contentBlocks/page8NewsDetails';
import WriteComment from '../contentBlocks/page8WriteComment';
import Page8RelatedNews from '../contentBlocks/page8News/index.jsx';
import Footer from '../Footer';

export const NewsDetails = () => { // page 7

    const news = [
        {
            category: 'health',
            title: 'New vaccine for cattle protects against fetal calf loss from EBA – anatomy of..',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            author: 'Hawkins Junior',
            timeRead: '24min read',
            date: 'November 21th, 2020',
            slug: 'dgfvg321gf',
        },
        {
            category: 'business',
            title: '4 Things parents learned for they jids in 2020',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            author: 'Hawkins Junior',
            timeRead: '24min read',
            date: 'November 21th, 2020',
            slug: 'dgfvg321gf',
        },
        {
            category: 'design',
            title: 'He Created the Web. Now He’s Out to Remake the Digital World.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            author: 'Melinda Humbles',
            timeRead: '24min read',
            date: 'November 21th, 2020',
            slug: 'j768',
        },
    ];

    return (
        <section>
            <Header />
            <NewsDetailsBlock />
            <WriteComment />
            <Page8RelatedNews news={news} />
            <div style={{ marginTop: '100px' }}>
                <Footer />
            </div>
        </section>
    );
};