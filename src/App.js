import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import SnippetsPage from './pages/SnippetsPage';
import Navbar from './components/Navbar';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}> home </Route>
        <Route path="/projects" element={<ProjectsPage/>}> projects </Route>
        <Route path="/snippets" element={<SnippetsPage/>}> snippets </Route>
      </Routes>
    </div>
  );
}

export default App;
