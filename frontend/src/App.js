import './App.css';

import Header from './components/Header';
import Page3block1 from './components/contentBlocks/page3_block1_includeSearch';

import RecentProjects from './components/contentBlocks/page1_recent_projects';

import WeHelpSurface from './components/contentBlocks/page1_we_help_surface';
import SuccessStory from './components/contentBlocks/page1_success_story';

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
import Footer from './components/Footer/index';

// content blocks - have to change img sources //

const ProjectDetails = () => {
  return (

    <section>
      <Header />

    <div className="App">
      <Header/>
      <Page3block1/>

      <RecentProjects />

      <WeHelpSurface />
      <SuccessStory />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Page5AboutProject />
      <Categories />
      <Numbers />
      <NewsDetails />
      <Details />
      <AboutProject />
      <Support />
      <DontMiss />
      <Footer />
    </section>
  )
}


function App() {
  const componentsArray = [
    <div>
      {ProjectDetails}
      <AboutProject />
      <Support />
      <Header/>
      <Page3block1/>
      <Categories />
      <Numbers />
      <NewsDetails />
      <Details />
      <Contact />
      <NewsPage1 />    
      <Donate />
      <TeamMember />
      <OurPartnership />
      <Register />
      <Login />
      <About />
      <OurMission />
      <FilterCategory />
      <LatestNews />
      <Fundraisng />
      <Page2Categories />
      <WhoWeAre />
      <WriteComment />
      <DontMiss />
      <BecomeOurPremPartner />
      <FormAddProject />
      <WeHelpSurface />
      <SuccessStory />
      <Footer />
      <RecentProjects />
    </div>
  ]

  return (
    <div className="App">
      {componentsArray.map((all_content) => (all_content))}
    </div>
  );
}

export default App;