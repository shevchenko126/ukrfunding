import Header from '../Header';
import WeHelpSurface from '../contentBlocks/page1_we_help_surface';
import Page1Categories from '../contentBlocks/page1_categories';
import TeamMember from '../contentBlocks/page1_meet_our';
import SuccessStory from '../contentBlocks/page1_success_story';
import OurPartnership from '../contentBlocks/page1_our_partnership';
import RecentProjects from '../contentBlocks/page1_recent_projects';
import Numbers from '../contentBlocks/page1_numbers';
import AkselNews from '../contentBlocks/page1_news';
import DontMiss from '../contentBlocks/page1_dont_miss';
import Footer from '../Footer/index';

export const HomePage_01 = () => {
    return (
        <section>
            <Header />
            <WeHelpSurface />
            <Page1Categories />
            <TeamMember />
            <SuccessStory />
            <OurPartnership />
            <RecentProjects />
            <Numbers />
            <AkselNews />
            <DontMiss />
            <Footer />
        </section>
    );
}