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

import About from './components/contentBlocks/page2_about_our_company';
import WhoWeAre from './components/contentBlocks/page2_who_we_are';
import Fundraising from './components/contentBlocks/page2_fundraising';
import Page2Categories from './components/contentBlocks/page2_categories';
import OurMission from './components/contentBlocks/page2_our_mission';

import HeaderModed from './components/contentBlocks/HeaderModed';
import Filtres from './components/contentBlocks/page3_filtres';
import Page3Projects from './components/contentBlocks/page3_projects';

import FilterCategory from './components/contentBlocks/page4_filter_category';
import Donate from './components/contentBlocks/page4_donate_to';
import Page4Projects from './components/contentBlocks/page4_projects';

import Contact from './components/contentBlocks/page6_contact_us';
import BecomeOurPremPartner from './components/contentBlocks/page6_Become_our_Premium_Partner';

import AkcelNews_page7 from './components/contentBlocks/page7_akcel_news';

import NewsDetails from './components/contentBlocks/page8_news_details';
import WriteComment from './components/contentBlocks/page8_write_comment';
import Page8Related from './components/contentBlocks/page8_related';

import TeamMember_09 from './components/contentBlocks/page9_team';

import Stories from './components/contentBlocks/page10_stories';

import Categories from './components/contentBlocks/page11_categories';
import Page115Projects from './components/contentBlocks/page11_projects';

const HomePage_01 = () => { // page 1 
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
  )
}

const AboutUs_02 = () => { // page 2
  return (
    <section>
      <Header />
      <About />
      <WhoWeAre />
      <Fundraising />
      <Page2Categories />
      <OurMission />
      <AkselNews />
      <DontMiss />
      <Footer />
    </section>
  )
}

const Projects4Col_03 = () => { //page 3
  return (
    <section>
      <HeaderModed />
      <Filtres />
      <Page3Projects />
      <OurPartnership />
      <DontMiss />
      <Footer />
    </section>
  )
}

const Projects3Col_03 = () => { // page 4
  return (
    <section>
      <HeaderModed />
      <div className='container' style={{ maxWidth: '1620px' }}>
        <div className='row'>
          <div className='col-xxl-3 col-lg-6 col-md-12'>
            <FilterCategory />
            <Donate />
          </div>
          <div className='col-xxl-9 col-lg-6 col-md-12 px-5'>
            <Page4Projects />
          </div>
        </div>
      </div>
      <OurPartnership />
      <DontMiss />
      <Footer />
    </section>
  )
}

const ProjectDetails_05 = () => { // page 5
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

const ContactUs_06 = () => { // page 6
  return (
    <section>
      <Header />
      <Contact />
      <OurPartnership />
      <BecomeOurPremPartner />
      <Footer />
    </section>
  )
}

const LatestNews_07 = () => { // page 7
  return (
    <section>
      <Header />
      <AkcelNews_page7 />
      <OurPartnership />
      <DontMiss />
      <Footer />
    </section>
  )
}

const NewsDetails_08 = () => { // page 8
  return (
    <section>
      <Header />
      <NewsDetails />
      <WriteComment />
      <Page8Related />
      <div style={{ marginTop: '100px' }}>
        <Footer />
      </div>
    </section>
  )
}

const AkcelTeamMember_09 = () => { // page 9
  return (
    <secion>
      <Header />
      <TeamMember_09 /> {/* create hover effect ( show facebbok, twitter ) */}
      <DontMiss />
      <Footer />
    </secion>
  )
}

const SuccessProjectStory_10 = () => { // page 10
  return (
    <section>
      <Header />
      <Stories />
      <DontMiss />
      <Footer />
    </section>
  )
}

const ProjectCategories_11 = () => { // page 11
  return (
    <section>
      <Header />
      <Categories />
      <Page115Projects />
      <BecomeOurPremPartner />
      <Footer />
    </section>
  )
}

function App() {
  return (
    <div className="App">
      <section>
        Helo World!
      </section>
    </div>
  );
}

export default App;