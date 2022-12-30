import Header from '../Header';
import WeHelpSurface from '../contentBlocks/page1_we_help_surface';
import Page1Categories from '../contentBlocks/page1_categories';
import TeamMember from '../contentBlocks/page1_meet_our';
import SuccessStory from '../contentBlocks/page1_success_story';
import OurPartnership from '../contentBlocks/OurPartnership';
import RecentProjects from '../contentBlocks/page1_recent_projects';
import Numbers from '../contentBlocks/page1_numbers';
import AkselNews from '../contentBlocks/page1_news';
import DontMiss from '../contentBlocks/page1_dont_miss';
import Footer from '../Footer/index';

export const HomePage_01 = () => {

    const projects = [
        {
            category: 'medical',
            title: 'Beautiful color for designers & students',
            progress: '45%',
            raised: 'Total Raised $ 5,345',
            days_left: '45 Days left',
            author: 'Cheyenne Curtis',
            campaign: '12 Campaign',
            location: 'New York, London',
        },
        {
            category: 'design',
            title: 'Notebook for your creative observation',
            progress: '30%',
            raised: 'Total Raised $ 5,345',
            days_left: '45 Days left',
            author: 'Ahmad Schleifer',
            campaign: '12 Campaign',
            location: 'New York, London',
        },
        {
            category: 'technnology',
            title: 'VR Ears | Hear Off-World Listen Off-Ear',
            progress: '90%',
            raised: 'Total Raised $ 5,345',
            days_left: '45 Days left',
            author: 'Skylar Gouse',
            campaign: '12 Campaign',
            location: 'New York, London',
        },
        {
            category: 'technnology',
            title: 'Self Driving Robot for Target Shooting Game',
            progress: '7%',
            raised: 'Total Raised $ 5,345',
            days_left: '45 Days left',
            author: 'Maren George',
            campaign: '12 Campaign',
            location: 'New York, London',
        },
    ];

    const team = [
        {
            img: '../image/page_1_team_member_profile.svg',
            name: 'Kaylynn Donin',
            job: 'Managing Director'
        },
        {
            img: '../image/page_1_team_member_profile.svg',
            name: 'Lindsey Botosh',
            job: 'National Web Assistant'
        },
        {
            img: '../image/page_1_team_member_profile.svg',
            name: 'Phillip Schleifer',
            job: 'National Intranet Specialist'
        },
        {
            img: '../image/page_1_team_member_profile.svg',
            name: 'Jakob Ekstrom Bothman',
            job: 'District Accounts Analyst'
        },
    ];

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
    ]

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