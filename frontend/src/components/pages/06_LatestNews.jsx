import Header from '../Header';
import AkcelNews_page7 from '../contentBlocks/page7AkcelNews';
import DontMiss from '../contentBlocks/DontMiss';
import Footer from '../Footer';

export const LatestNews_07 = () => { // page 7

    const news = [
        {
            category: 'health',
            title: 'New vaccine for cattle protects against fetal calf loss from EBA – anatomy of..',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            author: 'Hawkins Junior',
            timeRead: '24min read',
            date: 'November 21th, 2020',
            slug: '1bvnty',
        },
        {
            category: 'business',
            title: '4 Things parents learned for they jids in 2020',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            author: 'Hawkins Junior',
            timeRead: '24min read',
            date: 'November 21th, 2020',
            slug: 'c1hgxc',
        },
        {
            category: 'design',
            title: 'He Created the Web. Now He’s Out to Remake the Digital World.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            author: 'Melinda Humbles',
            timeRead: '24min read',
            date: 'November 21th, 2020',
            slug: '1gfh554',
        },
        {
            category: 'health',
            title: 'New vaccine for cattle protects against fetal calf loss from EBA – anatomy of..',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            author: 'Hawkins Junior',
            timeRead: '24min read',
            date: 'November 21th, 2020',
            slug: '1gfbvn',
        },
        {
            category: 'business',
            title: '4 Things parents learned for they jids in 2020',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            author: 'Hawkins Junior',
            timeRead: '24min read',
            date: 'November 21th, 2020',
            slug: '1gfhf',
        },
        {
            category: 'design',
            title: 'He Created the Web. Now He’s Out to Remake the Digital World.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            author: 'Melinda Humbles',
            timeRead: '24min read',
            date: 'November 21th, 2020',
            slug: 'gfd451',
        },
        {
            category: 'health',
            title: 'New vaccine for cattle protects against fetal calf loss from EBA – anatomy of..',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            author: 'Hawkins Junior',
            timeRead: '24min read',
            date: 'November 21th, 2020',
            slug: '532g1',
        },
        {
            category: 'business',
            title: '4 Things parents learned for they jids in 2020',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            author: 'Hawkins Junior',
            timeRead: '24min read',
            date: 'November 21th, 2020',
            slug: '1564bg',
        },
        {
            category: 'design',
            title: 'He Created the Web. Now He’s Out to Remake the Digital World.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            author: 'Melinda Humbles',
            timeRead: '24min read',
            date: 'November 21th, 2020',
            slug: '3121',
        },
    ];

    return (
        <section>
            <Header />
            <AkcelNews_page7 news={news} />
            <DontMiss />
            <Footer />
        </section>
    );
};