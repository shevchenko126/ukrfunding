import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

/* 
import Header from './components/Header';
import Page3block1 from './components/contentBlocks/page3_block1_includeSearch';
import Categories from './components/contentBlocks/page11_categories';
import Numbers from './components/contentBlocks/page1_numbers';
import NewsDetails from './components/contentBlocks/page8_news_details';
import Details from './components/contentBlocks/page5_project_details';
import Contact from './components/contentBlocks/page6_conact_us';
import Support from './components/contentBlocks/page5_support_other_projects';
import NewsPage1 from './components/contentBlocks/page1_news';
import Donate from './components/contentBlocks/page4_donate_to';
import TeamMember from './components/contentBlocks/page1_meet_our';
import OurPartnership from './components/contentBlocks/page1_our_partnership';
import Register from './components/contentBlocks/register';
import Login from './components/contentBlocks/login';
import OurMission from './components/contentBlocks/page2_about_our_company';
import About from './components/contentBlocks/page2_our_mission';
import FilterCategory from './components/contentBlocks/page4_filter_category';
import LatestNews from './components/contentBlocks/page7_latest_news';
import Fundraisng from './components/contentBlocks/page2_fundraising';
import Page2Categories from './components/contentBlocks/page2_categories';
import WhoWeAre from './components/contentBlocks/page2_who_we_are';
import WriteComment from './components/contentBlocks/page8_write_comment';
import DontMiss from './components/contentBlocks/block10_Dont_miss';
import BecomeOurPremPartner from './components/contentBlocks/page6_Become_our_Premium_Partner';
import AboutProject from './components/contentBlocks/page5_about_project';
import FormAddProject from './components/contentBlocks/form_add_project';
import Page5Projects from './components/contentBlocks/page5_projects';
import Footer from './components/Footer/index';  */

import Header from './components/Header';
import WeHelpSurface from './components/contentBlocks/page1_we_help_surface';
import Page1Categories from './components/contentBlocks/page1_categories';
import TeamMember from './components/contentBlocks/page1_meet_our';
import SuccessStory from './components/contentBlocks/page1_success_story';
import OurPartnership from './components/contentBlocks/page1_our_partnership';
import RecentProjects from './components/contentBlocks/page1_recent_projects';
import Numbers from './components/contentBlocks/page1_numbers';
import AkselNews from './components/contentBlocks/page1_news';
import DontMiss from './components/contentBlocks/page1_dont_miss';
import Footer from './components/Footer/index';

import Details from './components/contentBlocks/page5_project_details';
import Page5Projects from './components/contentBlocks/page5_projects';
import Support from './components/contentBlocks/page5_support_other_projects';
import AboutProject from './components/contentBlocks/page5_about_project';

const ProjectDetails = () => {
  return (
    <section>
      <Header />
      <Details />
      <div className='container' style={{ maxWidth: '1620px' }}>
        <div className='row'>
          <div className='col-lg-8 col-md-12 p-0'>
            <AboutProject />
          </div>
          <div className='col-lg-3 col-md-12 p-0 support'>
            <Support />
          </div>
        </div>
      </div>
      <Page5Projects />
      <DontMiss />
      <Footer />
    </section>
  )
}

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <WeHelpSurface />
        <Page1Categories />
        <TeamMember />
        <SuccessStory />
        <OurPartnership />
        <RecentProjects />
        <Numbers />
        <AkselNews /> {/* create map rendering */}
        <div style={{ marginTop: '150px' }}>
          <DontMiss />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;