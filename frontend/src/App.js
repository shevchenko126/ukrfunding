import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

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
import { ChangePassword } from './components/pages/12_ChangePassword';
import { Register } from './components/pages/13_Register';
import { Login } from './components/pages/14_Login';
import { AddProject } from './components/pages/15_AddProject';
import { PageNotFound } from './components/pages/16_PageNotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage_01 />} />
          <Route path="/about-us" element={<AboutUs_02 />} />
          {/* <Route path="/projects-4-col" element={<Project4Col_03 />} /> */}
          <Route path="/projects" element={<Project3Col_04 />} />
          <Route path="/project/:project" element={<ProjectDetails_05 />} />
          <Route path="/contact-us" element={<ContactUs_06 />} />
          <Route path="/news" element={<LatestNews_07 />} />
          <Route path="/news/:news" element={<NewsDetails_08 />} />
          <Route path="/team-members" element={<TeamMember_09 />} />
          <Route path="/success-project" element={<SuccessProjectStory_10 />} />
          <Route path="/categories" element={<ProjectCategories_11 />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-project" element={<AddProject />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;