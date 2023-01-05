import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

/* Pages */
import { HomePage } from './components/pages/01_HomePage';
import { AboutUs } from './components/pages/02_AboutUs';
import { Projects } from './components/pages/03_Projects';
import { ProjectDetails } from './components/pages/04_ProjectDetails';
import { ContactUs } from './components/pages/05_ContactUs';
import { LatestNews } from './components/pages/06_LatestNews';
import { NewsDetails } from './components/pages/07_NewsDetails';
import { TeamMember } from './components/pages/08_TeamMember';
import { SuccessProjectStory } from './components/pages/09_SuccessProject';
import { ProjectCategories } from './components/pages/10_ProjectCategories';
import { ChangePassword } from './components/pages/11_ChangePassword';
import { Register } from './components/pages/12_Register';
import { Login } from './components/pages/13_Login';
import { AddProject } from './components/pages/14_AddProject';
import { PageNotFound } from './components/pages/15_PageNotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:project" element={<ProjectDetails />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/news" element={<LatestNews />} />
          <Route path="/news/:news" element={<NewsDetails />} />
          <Route path="/team" element={<TeamMember />} />
          <Route path="/success-story" element={<SuccessProjectStory />} />
          <Route path="/categories" element={<ProjectCategories />} />
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