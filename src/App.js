import logo from './logo.svg';
import './App.css';
import Background from './Components/Background';
import Header from './Components/Header';
import About from './Components/About';
import Overview from './Components/Overview';
import Work from './Components/Work';
import Projects from './Components/Projects';
import SocialLife from './Components/SocialLife';
import Testimonials from './Components/Testimonials';

function App() {
  return (
    <div className="App unselectable">
      <Background />
      <Header />
      <div className='content'>
        <div id="about"><About /></div>
        <Overview />
        <div id="work"><Work /></div>
        <Projects />
        <div id="social-life"><SocialLife /></div>
        <Testimonials />
      </div>
    </div>
  );
}

export default App;
