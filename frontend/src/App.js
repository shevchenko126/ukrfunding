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
import BecomeOurPremPartner from './components/contentBlocks/BecomeOurPremiumPartner';

import AkcelNews_page7 from './components/contentBlocks/page7AkcelNews';

import NewsDetails from './components/contentBlocks/page8NewsDetails';
import WriteComment from './components/contentBlocks/page8WriteComment';
import Page8Related from './components/contentBlocks/page8News/index.jsx';

import Stories from './components/contentBlocks/page10Stories';

import Categories from './components/contentBlocks/page11Categories';
import Page115Projects from './components/contentBlocks/page11Projects';

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
import { LatestNews_07 } from './components/pages/07_LatestNews';
import { NewsDetails_08 } from './components/pages/08_NewsDetails';
import { TeamMember_09 } from './components/pages/09_TeamMember';
import { SuccessProjectStory_10 } from './components/pages/10_SuccessProject';
import { ProjectCategories_11 } from './components/pages/11_ProjectCategories';
import { ChangePassword_12 } from './components/pages/12_ChangePassword';

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
          <Route path="/team-members" element={<TeamMember_09 />} />
          <Route path="/success-project" element={<SuccessProjectStory_10 />} />
          <Route path="/project-categories" element={<ProjectCategories_11 />} />
          <Route path="/change-password" element={<ChangePassword_12 />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-project" element={<AddProject />} />
          <Route path="*" />
        </Routes>
      </Router>
    </div>
  );
};

export default App;