import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HomePage from './pages/HomePage/HomePage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import SnippetsPage from './pages/SnippetsPage';
import PlaygroundPage from './pages/PlaygroundPage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import InfoPage from './pages/InfoPage/InfoPage';
import ProjectRumblePage from './pages/ProjectRumblePage/ProjectRumblePage';
import TimeoutPage from './pages/TimeoutPage/TimeoutPage';


function App() {

  const [background, setBackground] = useState('');
  const location = useLocation(); // <== wichtig!

  useEffect(() => {
    const path = location.pathname;

    switch (path) {
      case '/':
        setBackground('homeBackground');
        break;
      case '/info':
      case '/contact':
        setBackground('greyBackground');
        break;
      case '/timeout':
        setBackground('homeBackground');
        break;
      default:
        setBackground('');
        break;
    }
  }, [location.pathname]); // <== wichtig: reagieren auf Pfadänderung
  return (
        <div className={`App ${background}`}>
          <Navbar/>
          <div className="pageContent">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/rumble" element={ <ProjectRumblePage/>}/>
              <Route path="/snippets" element={<SnippetsPage />} />
              <Route path="/playground" element={<PlaygroundPage />} />
              <Route path="/timeout" element={<TimeoutPage />} />
              <Route path="/info" element={<InfoPage />} />
            </Routes>
          </div>
          <Footer/>
        </div>
  );
}

export default App;
