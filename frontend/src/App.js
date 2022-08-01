import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Page3block1 from './components/contentBlocks/page3_block1_includeSearch';
import WeHelpSurface from './components/contentBlocks/page1_we_help_surface';
import SuccessStory from './components/contentBlocks/page1_success_story';

function App() {
  return (
    <div className="App">
      <Header/>
      <Page3block1/>
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
    </div>
  );
}

export default App;
