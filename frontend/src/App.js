import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Page3block1 from './components/contentBlocks/page3_block1_includeSearch';

import Categories from './components/contentBlocks/page11_categories';
import Numbers from './components/contentBlocks/page1_numbers';
import News from './components/contentBlocks/page8_news_details';
import Details from './components/contentBlocks/page5_project_details';
import Contact from './components/contentBlocks/page6_conact_us';
import Support from './components/contentBlocks/page5_support_other_projects';
import NewsPage1 from './components/contentBlocks/page1_news';
import Donate from './components/contentBlocks/page4_donate_to';
import TeamMember from './components/contentBlocks/page1_team_member';
import OurPartnership from './components/contentBlocks/page1_our_partnership';
import Register from './components/contentBlocks/register';
import Login from './components/contentBlocks/login';
import About from './components/contentBlocks/page2_about_our_company';

function App() {
  return (
    <div className="App">
      <Header/>
      <Page3block1/>
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
          <Categories />
          <Numbers />
          <News />
          <Details />
          <Contact />
          <Support />
          <NewsPage1 />    
          <Donate />
          <TeamMember />
          <OurPartnership />
          <Register />
          <Login />
          <About />
    </div>
  );
}

export default App;
