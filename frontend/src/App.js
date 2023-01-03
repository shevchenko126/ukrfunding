import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

import Header from './components/Header';
import WeHelpSurface from './components/contentBlocks/page1WeHelpSurface';
import Page1Categories from './components/contentBlocks/page1Categories';
import TeamMember from './components/contentBlocks/page1MeetOur';
import SuccessStory from './components/contentBlocks/page1SuccessStory';
import OurPartnership from './components/contentBlocks/OurPartnership';
import RecentProjects from './components/contentBlocks/page1RecentProjects';
import Numbers from './components/contentBlocks/page1Numbers';
import AkselNews from './components/contentBlocks/AkselNews';
import DontMiss from './components/contentBlocks/DontMiss';
import Footer from './components/Footer/index';

import Details from './components/contentBlocks/page5ProjectDetails';
import Page5Projects from './components/contentBlocks/page5Projects';
import Support from './components/contentBlocks/page5SupportOtherProjects';
import AboutProject from './components/contentBlocks/page5AboutProject';

import About from './components/contentBlocks/page2AboutOurCompany';
import WhoWeAre from './components/contentBlocks/page2WhoWeAre';
import Fundraising from './components/contentBlocks/page2Fundraising';
import Page2Categories from './components/contentBlocks/page2Categories';

import HeaderModed from './components/contentBlocks/HeaderModed';
import Page3Projects from './components/contentBlocks/page3Projects';

import FilterCategory from './components/contentBlocks/page4FilterCategory';
import Donate from './components/contentBlocks/page4Donate';
import Page4Projects from './components/contentBlocks/page4Projects';

import Contact from './components/contentBlocks/ContactUs';
import BecomeOurPremPartner from './components/contentBlocks/page6_Become_our_Premium_Partner';

import AkcelNews_page7 from './components/contentBlocks/page7_akcel_news';

import NewsDetails from './components/contentBlocks/page8_news_details';
import WriteComment from './components/contentBlocks/page8_write_comment';
import Page8Related from './components/contentBlocks/page8_related';

import TeamMember_09 from './components/contentBlocks/page9_team';

import Stories from './components/contentBlocks/page10_stories';

import Categories from './components/contentBlocks/page11_categories';
import Page115Projects from './components/contentBlocks/page11_projects';

import ChangePasswordPage from './components/contentBlocks/ChangePassword';

import RegisterPage from './components/contentBlocks/register';

import LoginPage from './components/contentBlocks/login';

import FormAddProject from './components/contentBlocks/form_add_project';

/* Pages */
import { HomePage_01 } from './components/pages/01_HomePage';
import { AboutUs_02 } from './components/pages/02_AboutUs';
import { Project4Col_03 } from './components/pages/03_Project4Col';
import { Project3Col_04 } from './components/pages/04_Project3Col';
import { ProjectDetails_05 } from './components/pages/05_ProjectDetails';
import { ContactUs_06 } from './components/pages/06_ContactUs';

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

const ChangePassword = () => { // change info about user
  return (
    <section>
      <Header />
      <ChangePasswordPage />
      <Footer />
    </section>
  )
};

const Register = () => { // register page
  return (
    <section>
      <Header />
      <RegisterPage />
      <Footer />
    </section>
  )
};

const Login = () => { // login page
  return (
    <section>
      <Header />
      <LoginPage />
      <Footer />
    </section>
  )
};

const AddProject = () => { // add project form page // ADD STYLES TO PAGE
  return (
    <section>
      <Header />
      <FormAddProject />
      <Footer />
    </section>
  )
};

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage_01 />} />
          <Route path="/about-us" element={<AboutUs_02 />} />
          <Route path="/projects-4-col" element={<Project4Col_03 />} />
          <Route path="/projects-3-col" element={<Project3Col_04 />} />
          <Route path="/project-details/:project" element={<ProjectDetails_05 />} />
          <Route path="/contact-us" element={<ContactUs_06 />} />
          <Route path="/latest-news" element={<LatestNews_07 />} />
          <Route path="/news-details/:news" element={<NewsDetails_08 />} />
          <Route path="/team-member" element={<AkcelTeamMember_09 />} />
          <Route path="/success-project" element={<SuccessProjectStory_10 />} />
          <Route path="/project-categories" element={<ProjectCategories_11 />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-project" element={<AddProject />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;