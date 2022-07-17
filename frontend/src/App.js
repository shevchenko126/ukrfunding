import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Page3block1 from './components/contentBlocks/page3_block1_includeSearch';
import Page6_redclock from './components/contentBlocks/page6_Become_our_Premium_Partner now!';

import Categories from './components/contentBlocks/page11_categories';
import Numbers from './components/contentBlocks/page1_numbers';
import News from './components/contentBlocks/page8_news_details';
import Details from './components/contentBlocks/page5_project_details';
import Contact from './components/contentBlocks/page6_conact_us';
import Support from './components/contentBlocks/page5_support_other_projects';

function App() {
  return (
    <div className="App">
      <Header/>
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
      <Page3block1/>
      <Page6_redclock/>
    </div>
  );
}

export default App;
