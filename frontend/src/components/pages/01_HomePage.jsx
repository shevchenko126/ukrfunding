import Header from '../Header';
import WeHelpSurface from '../contentBlocks/page1WeHelpSurface';
import Page1Categories from '../contentBlocks/page1Categories';
import TeamMember from '../contentBlocks/page1MeetOur';
import SuccessStory from '../contentBlocks/page1SuccessStory';
import OurPartnership from '../contentBlocks/OurPartnership';
import RecentProjects from '../contentBlocks/page1RecentProjects';
import Numbers from '../contentBlocks/page1Numbers';
import AkselNews from '../contentBlocks/AkselNews';
import DontMiss from '../contentBlocks/DontMiss';
import Footer from '../Footer/index';

export const HomePage = () => { // page 1

    const projects = [
        {
            category: 'medical',
            title: 'Beautiful color for designers & students',
            progress: '45%',
            raised: '5,345',
            daysLeft: '45',
            author: 'Cheyenne Curtis',
            location: 'New York, London',
            slug: '1bvnty',
        },
        {
            category: 'medical',
            title: 'Beautiful color for designers & students',
            progress: '45%',
            raised: '5,345',
            daysLeft: '45',
            author: 'Cheyenne Curtis',
            location: 'New York, London',
            slug: '1bvnty',
        },
        {
            category: 'medical',
            title: 'Beautiful color for designers & students',
            progress: '45%',
            raised: '5,345',
            daysLeft: '45',
            author: 'Cheyenne Curtis',
            location: 'New York, London',
            slug: '1bvnty',
        },
        {
            category: 'medical',
            title: 'Beautiful color for designers & students',
            progress: '45%',
            raised: '5,345',
            daysLeft: '45',
            author: 'Cheyenne Curtis',
            location: 'New York, London',
            slug: '1bvnty',
        },
    ];

    const team = [
        {
            name: 'Jason Krash',
            job: 'Managing Director',
            img: '/image/page_1_team_member_profile.svg',
            twitter: 'https://trello.com/b/WNCXT7vu/ukrfunding',
            facebook: 'https://trello.com/b/WNCXT7vu/ukrfunding',
        },
        {
            name: 'Jason Krash',
            job: 'Managing Director',
            img: '/image/page_1_team_member_profile.svg',
            twitter: 'https://trello.com/b/WNCXT7vu/ukrfunding',
            facebook: 'https://trello.com/b/WNCXT7vu/ukrfunding',
        },
        {
            name: 'Jason Krash',
            job: 'Managing Director',
            img: '/image/page_1_team_member_profile.svg',
            twitter: 'https://trello.com/b/WNCXT7vu/ukrfunding',
            facebook: 'https://trello.com/b/WNCXT7vu/ukrfunding',
        },
        {
            name: 'Jason Krash',
            job: 'Managing Director',
            img: '/image/page_1_team_member_profile.svg',
            twitter: 'https://trello.com/b/WNCXT7vu/ukrfunding',
            facebook: 'https://trello.com/b/WNCXT7vu/ukrfunding',
        },
    ];

    const news = [
        {
            category: 'health',
            title: 'New vaccine for cattle protects against fetal calf loss from EBA – anatomy of..',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            author: 'Hawkins Junior',
            date: 'November 21th, 2020',
            slug: '321dsd',
        },
        {
            category: 'business',
            title: '4 Things parents learned for they jids in 2020',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            author: 'Hawkins Junior',
            date: 'November 21th, 2020',
            slug: '321dsd',
        },
        {
            category: 'design',
            title: 'He Created the Web. Now He’s Out to Remake the Digital World.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            author: 'Melinda Humbles',
            date: 'November 21th, 2020',
            slug: '321dsd',
        },
    ];

    return (
        <section>
            <Header />
            <WeHelpSurface />
            <Page1Categories />
            <TeamMember team={team} />
            <SuccessStory />
            <OurPartnership />
            <RecentProjects projects={projects} />
            <Numbers />
            <AkselNews news={news} />
            <DontMiss />
            <Footer />
        </section>
    );
}