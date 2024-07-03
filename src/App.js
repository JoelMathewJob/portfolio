
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Navbar from './components/navbar'
// import Games from './pages/games/games'
import Header from './components/header'
import Projects from './components/projects'
import Skills from './components/skills'
import Connect from './components/connect'
import Footer from './components/footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Projects/>
      <Skills/> 
      <Connect/>
      <Footer/> 
      {/* <Games/> */}
      
    </div>
  );
}

export default App;
