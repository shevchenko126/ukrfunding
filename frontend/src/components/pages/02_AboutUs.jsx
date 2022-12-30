import Header from '../Header';
import About from '../contentBlocks/page2AboutOurCompany';
import WhoWeAre from '../contentBlocks/page2WhoWeAre';
import Fundraising from '../contentBlocks/page2Fundraising';
import Categories from '../contentBlocks/page2_categories';
import OurMission from '../contentBlocks/page2_our_mission';
import AkselNews from '../contentBlocks/AkselNews';
import DontMiss from '../contentBlocks/DontMiss';
import Footer from '../Footer';

export const AboutUs_02 = () => { // page 2

    const news = [
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
    ];

    return (
        <section>
            <Header />
            <About />
            <WhoWeAre />
            <Fundraising />
            <Categories />
            <OurMission />
            <AkselNews news={news} />
            <DontMiss />
            <Footer />
        </section>
    )
}