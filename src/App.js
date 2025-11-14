import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HomePage from './pages/HomePage/HomePage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import PlaygroundPage from './pages/Playgroundpage/PlaygroundPage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import InfoPage from './pages/InfoPage/InfoPage';
import ProjectMioViewerPage from './pages/ProjectMioViewerPage/ProjectMioViewerPage';
import ProjectRumblePage from './pages/ProjectRumblePage/ProjectRumblePage';
import ProjectGiraffePage from './pages/ProjectGiraffePage/ProjectGiraffePage';
import ProjectSecurityCentralPage from './pages/ProjectSecurityCentralPage/ProjectSecurityCentralPage';
import ProjectAlgaeKitPage from './pages/ProjectAlgaeKitPage/ProjectAlgaeKitPage';
import ProjectAirYardPage from './pages/ProjectAirYardPage/ProjectAirYardPage';


function App() {

  const [background, setBackground] = useState('greyBackground');
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    switch (path) {
      case '/':
        setBackground('homeBackground');
        break;
      // case '/info':
      //   setBackground('greyBackground');
      //   break;
      // case '/projects':
      //   setBackground('greyBackground');
      //   break;
      // case '/playground':
      //   setBackground('greyBackground');
      //   break;
      default:
        setBackground('greyBackground');
        break;
    }
  }, [location.pathname]);

  return (
        <div className={`App ${background}`}>
          <Navbar/>
          <div className="appLayout">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/mioviewer" element={<ProjectMioViewerPage />} />
              <Route path="/projects/rumble" element={<ProjectRumblePage />} />
              <Route path="/projects/giraffe" element={<ProjectGiraffePage />} />
              <Route path="/projects/securitycentral" element={<ProjectSecurityCentralPage />} />
              <Route path="/projects/algaekit" element={<ProjectAlgaeKitPage />} />
              <Route path="/projects/airyard" element={<ProjectAirYardPage />} />
              <Route path="/playground" element={<PlaygroundPage />} />
              <Route path="/info" element={<InfoPage />} />
            </Routes>
          </div>
          <Footer/>
        </div>
  );
}

export default App;