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
            <AkselNews />
            <DontMiss />
            <Footer />
        </section>
    );
}